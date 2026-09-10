<p align="center">
  <img src="./icons/icon128.png" width="96" height="96" alt="SuperNetDev" />
</p>

<h1 align="center">SuperNetDev</h1>

<p align="center">
  <strong>Chrome DevTools 面板：看请求 · 改接口 · Mock 响应</strong>
</p>

<p align="center">
  模糊匹配 · 延迟 · 改头改体 · 双栏 Diff · 字段备注 · 规则场景组
</p>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md"><strong>简体中文</strong></a>
</p>

<p align="center">
  <a href="https://github.com/izhuyan/SuperNetDev/releases"><img src="https://img.shields.io/github/v/release/izhuyan/SuperNetDev?color=369eff&labelColor=black&logo=github&style=flat-square" alt="Release" /></a>
  <a href="#安装"><img src="https://img.shields.io/badge/chrome-扩展安装-4285F4?labelColor=black&logo=googlechrome&logoColor=white&style=flat-square" alt="Install" /></a>
  <a href="#快速上手"><img src="https://img.shields.io/badge/guide-5%20分钟上手-c4f042?labelColor=black&style=flat-square" alt="Guide" /></a>
</p>

<p align="center">
  <a href="#简介">简介</a> ·
  <a href="#能做什么">功能</a> ·
  <a href="#安装">安装</a> ·
  <a href="#快速上手">上手</a> ·
  <a href="#匹配规则">匹配</a> ·
  <a href="#常见问题">FAQ</a> ·
  <a href="#更新">更新</a>
</p>

---

## 简介

**SuperNetDev** 是一款面向前端调试的 Chrome DevTools 扩展面板。它把「看请求」和「改接口」放在同一块面板里：既能像 Network 一样浏览 Fetch / XHR，又能用持久化规则对命中的接口做延迟、改头、改体、整段 Mock。

前端日常最烦的几件事，它基本都对上了：

- 后端接口还没好，页面卡死跑不起来
- 某个字段偶发报错，想临时改响应验证 UI
- 要给接口加延迟，模拟弱网 / loading / 超时
- Chrome Network 能看，但不能「改完立刻生效」

装上扩展 → F12 → 选 **SuperNetDev** → 从请求一键建规则。Done.

> [!TIP]
> 本目录就是可加载的扩展包。按下方步骤加载到 Chrome 即可使用，无需额外安装环境。

> [!NOTE]
> 拦截通过注入页面的 `fetch` / `XMLHttpRequest` 实现，主要覆盖 **XHR 与 Fetch**。静态资源仍可在列表中查看，但默认不会被改写。

公开下载：[Releases](https://github.com/izhuyan/SuperNetDev/releases) · 源码：[SuperNetDev-core](https://github.com/izhuyan/SuperNetDev-core)

---

## 能做什么

| 能力 | 说明 |
| :--- | :--- |
| **网络列表** | Name / Status / Type / Initiator / Size / Time；支持 All、Fetch/XHR、Doc、CSS、JS、Font、Img、Media、WS、Other |
| **多种匹配** | 模糊包含、通配符、正则、精确；命中后 Name 列出现铅笔图标，可直接编辑规则 |
| **请求延迟** | 按毫秒延迟，方便测 loading、骨架屏、超时提示 |
| **改头改体** | 增删改请求头 / 响应头，替换请求体 |
| **Mock 响应** | 整段 Mock，可不发真实请求 |
| **快捷重写** | 在详情里直接改 Headers / Payload / Response，自动落到「快捷修改」分组 |
| **双栏 Diff** | 相对原始响应有改动时，左右对比（原始 / 当前），行级高亮 |
| **字段备注** | Response JSON 键旁可加备注，按接口维度持久化 |
| **规则场景组** | 规则分组、颜色、折叠；一键启停 / 切换联调场景 |
| **全局搜索** | `Ctrl+F` 搜请求；在 JSON 区悬停时走本地查找 |
| **版本提醒** | 远端有新版本时，「关于工具」显示红点，可一键跳转下载 |

---

## 安装

<p align="center">
  <img src="./docs/guide-install.png" width="720" alt="在 Chrome 中加载扩展" />
</p>

1. 确认本文件夹完整（包含 `manifest.json`、`icons` 等）
2. 打开 Chrome，地址栏进入：`chrome://extensions`
3. 右上角打开 **开发者模式**
4. 点击 **加载已解压的扩展程序**
5. 选择**本文件夹**（解压后的整个目录）
6. 打开任意网页 → 按 **F12** → 顶部面板找到并点开 **SuperNetDev**

> [!IMPORTANT]
> 加载的是「已解压的文件夹」，不要只选里面的某个子文件。若你是从 ZIP 下载的，请先完整解压。

也可从 [Releases](https://github.com/izhuyan/SuperNetDev/releases) 下载最新 `SuperNetDev-Extension.zip`，解压后按同样步骤加载。

---

## 快速上手

<p align="center">
  <img src="./docs/guide-network.png" width="720" alt="网络列表示意" />
</p>

### 网络列表：像 Network，但更适合联调

1. 打开要调试的页面 → **F12** → **SuperNetDev**
2. 顶部切到 **网络列表**，过滤选 **Fetch/XHR**
3. 刷新页面，点击一条接口查看详情（Headers / Payload / Response）
4. 点 **从此请求创建规则**（或顶部 **新建规则**）
5. 自动带上请求路径、请求体 / 响应体草稿；配置延迟、Mock、改头改体后保存（支持 `Ctrl+S`）
6. 确认顶部 **拦截** 开关已打开，再刷新页面验证

匹配默认是模糊的——填 `getStudentInfo` 往往就够命中对应接口。

<p align="center">
  <img src="./docs/guide-rules.png" width="720" alt="拦截规则示意" />
</p>

### 延迟、改写与 Mock

针对命中规则的接口，你可以：

- **Delay**：加几百毫秒到几秒，测 loading / 超时文案
- **改请求头 / 响应头**：增删改任意 Header
- **替换请求体**：联调时临时改入参
- **Mock 响应**：整段替换响应体，甚至不发真实请求
- **快捷重写**：在详情里直接改，规则会自动进入「快捷修改」分组

适合「后端还没好」「只想验证前端分支」「临时绕过某个错误字段」这些场景。

### 规则场景组

规则可以按场景分组（例如：登录联调、成绩页 Mock、弱网模拟），支持颜色与折叠，一键启停整组。切需求时不用一条条开关规则。

> [!IMPORTANT]
> 关闭开发者工具后，**已启用的拦截规则仍然生效**（注入脚本在页面侧继续工作）。不需要拦截时，请关掉「拦截」开关，或停用对应规则。

---

## 匹配规则

| 方式 | 例子 | 说明 |
| :--- | :--- | :--- |
| 模糊 | `getStudentInfo` | 可命中 `/cs-api/student/getStudentInfo?studentId=20240001` |
| 通配符 | `*/cs-api/course/*` | `*` 匹配任意片段 |
| 正则 | `transcript$` | 按正则匹配 URL |
| 精确 | 完整 URL 或 pathname | 完全一致才命中 |

命中**已启用**规则的请求，会在 Name 列显示铅笔图标，点击即可编辑该规则。

---

## 常用操作

| 操作 | 怎么做 |
| :--- | :--- |
| 切换网络列表 / 拦截规则 | 顶部两个大标签；也可右键按住左右滑动切换 |
| 搜索请求 | `Ctrl+F`（鼠标在 JSON 区域时，会先搜当前文本） |
| 保存规则 | 规则编辑页 `Ctrl+S` |
| 清空列表 | 工具栏橡皮擦按钮 |
| 保留刷新前日志 | 打开「保留日志」 |
| 检查更新 | 点「关于工具」；有红点说明有新版本 |

---

## 更新

1. 打开面板，若 **关于工具** 有小红点，点进去
2. 在版本旁点 **去下载**，获取最新压缩包
3. 解压后覆盖本目录（或重新「加载已解压的扩展程序」指向新目录）
4. 回到 `chrome://extensions`，点扩展卡片上的 **重新加载**

最新版本始终可在：[Releases](https://github.com/izhuyan/SuperNetDev/releases)

---

## 常见问题

**Q：面板里没有请求？**  
确认过滤是否为 Fetch/XHR，刷新页面；确认正在调试的是当前打开的网页标签。

**Q：规则保存了但不生效？**  
检查顶部 **拦截** 是否开启、规则是否 **启用**、匹配模式是否能命中当前 URL；改规则后建议刷新页面。

**Q：关掉 F12 后接口还在被改？**  
这是预期行为。关闭「拦截」开关，或禁用相关规则即可恢复。

**Q：图片、脚本等静态资源会被改写吗？**  
默认只看不改。拦截主要覆盖 Fetch / XHR。

**Q：如何卸载？**  
`chrome://extensions` → SuperNetDev → **移除**。

---

## 链接与反馈

- **公开下载**：[izhuyan/SuperNetDev](https://github.com/izhuyan/SuperNetDev)
- **源码仓库**：[izhuyan/SuperNetDev-core](https://github.com/izhuyan/SuperNetDev-core)
- **问题反馈**：GitHub Issues
- **微信交流**：`bbq-nu`

---

## 赞助

如果 SuperNetDev 帮你省了联调时间，欢迎在面板里点 **赞助作者**，请作者喝杯咖啡 ☕

---

<p align="center">
  <sub>Made for frontend debugging · SuperNetDev</sub>
</p>
