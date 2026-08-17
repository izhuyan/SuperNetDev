//#region src/lib/constants.ts
var e = {
	rules: "netManager.rules",
	groups: "netManager.groups",
	interceptEnabled: "netManager.interceptEnabled",
	tourSeen: "netManager.tourSeen",
	locale: "netManager.locale",
	preserveLog: "netManager.preserveLog"
}, t = "NET_MANAGER";
//#endregion
//#region src/lib/i18n.ts
function n() {
	return (navigator.language || navigator.languages?.[0] || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
}
//#endregion
//#region src/extension/background.ts
var r = /* @__PURE__ */ new Map();
async function i() {
	let t = await chrome.storage.local.get([
		e.rules,
		e.interceptEnabled,
		e.locale
	]), r = t[e.locale], i = r === "en" || r === "zh" ? r : n();
	return {
		rules: t[e.rules] ?? [],
		interceptEnabled: t[e.interceptEnabled] !== !1,
		locale: i
	};
}
async function a() {
	let e = await i(), n = await chrome.tabs.query({});
	for (let r of n) r.id && chrome.tabs.sendMessage(r.id, {
		source: t,
		type: "SYNC_RULES",
		...e
	}).catch(() => {});
}
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({ [e.interceptEnabled]: !0 });
}), chrome.storage.onChanged.addListener((t, n) => {
	n === "local" && (t[e.rules] || t[e.interceptEnabled] || t[e.locale]) && a();
}), chrome.runtime.onConnect.addListener((e) => {
	if (e.name !== "devtools-panel") return;
	let t = e;
	e.onMessage.addListener((n) => {
		n.type === "REGISTER_PANEL" && typeof n.tabId == "number" && (t.tabId = n.tabId, r.set(n.tabId, e));
	}), e.onDisconnect.addListener(() => {
		typeof t.tabId == "number" && r.get(t.tabId) === e && r.delete(t.tabId);
	});
}), chrome.runtime.onMessage.addListener((e, n, a) => {
	if (!(!e || e.source !== "NET_MANAGER")) {
		if (e.type === "GET_SETTINGS") return i().then(a), !0;
		if (e.type === "CAPTURED_REQUEST") {
			let i = n.tab?.id, a = e.request;
			if (i && a) {
				let e = {
					source: t,
					type: "MOCKED_REQUEST",
					tabId: i,
					request: a
				};
				try {
					r.get(i)?.postMessage(e);
				} catch {}
				try {
					chrome.runtime.sendMessage(e, () => void chrome.runtime.lastError);
				} catch {}
			}
			return;
		}
		if (e.type === "CONTENT_READY") return i().then(a), !0;
	}
});
//#endregion
