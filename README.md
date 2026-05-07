# Yellow Page

一个轻量、可扩展、多语言（中 / 英 / 日）的个人导航主页，**纯静态 HTML/CSS/JS，零构建**，部署在 Cloudflare Pages 上。push 到 GitHub 即自动发布。

## 文件结构

```
yellowpage/
├── index.html     # 页面骨架
├── styles.css     # 主题与卡片样式
├── app.js         # 站点数据 + 渲染 + i18n + AdSense 注入
├── README.md      # 本文件
└── .gitignore
```

## 本地预览

```bash
# 任选一个
python3 -m http.server 8000
# 或
npx serve .
```

然后访问 <http://localhost:8000>。

## 添加 / 修改站点

打开 `app.js`，找到 `SITES` 数组，复制任意一项改字段即可：

```js
{
  id: "my-new-site",
  url: "https://example.com",
  category: "ai_chat",          // 必须是 CATEGORIES 中已存在的 id
  name: "Example",
  desc: {
    zh: "中文一句话介绍",
    en: "One-line description in English",
    ja: "日本語の一文紹介"
  },
  free: {
    zh: "免费额度说明",
    en: "Free tier details",
    ja: "無料枠の説明"
  }
}
```

刷新页面即可看到。**站点图标自动抓取**，不用配。

## 添加新分类

在 `app.js` 顶部 `CATEGORIES` 数组里加一行：

```js
{ id: "tools", icon: "🛠️", name: { zh: "工具", en: "Tools", ja: "ツール" } }
```

然后让相关站点的 `category` 字段引用 `"tools"`。

## 添加新语言

例如新增韩文：

1. 在 `SUPPORTED_LANGS` 中加 `"ko"`
2. 在 `I18N` 对象中加 `ko: { ... }` 完整翻译 UI 字符串
3. 在每个 `SITES` 项的 `desc` 和 `free`、每个 `CATEGORIES` 项的 `name` 中加 `ko: "..."`
4. 在 `index.html` 的 `<select id="lang-switch">` 中加 `<option value="ko">한국어</option>`

## 启用 Google AdSense

1. 在 [AdSense](https://www.google.com/adsense) 创建账号，拿到发布商 ID（形如 `ca-pub-1234567890123456`）
2. 创建两个广告单元（推荐尺寸 160×600 摩天大楼），各拿到一个 slot ID
3. 打开 `app.js`，把顶部 `ADSENSE` 对象改成：
   ```js
   const ADSENSE = {
     pubId:     "ca-pub-1234567890123456",
     leftSlot:  "你的左侧 slot ID",
     rightSlot: "你的右侧 slot ID",
     enabled:   true
   };
   ```
4. 提交，等几分钟后 AdSense 审核通过即生效

> 注：本地开发时 AdSense 会显示空白（因为 AdSense 限制非备案域名加载），部署到 Cloudflare 后正常。

## 部署到 Cloudflare Pages

### 第一次部署

```bash
# 1. 初始化 git 并推到 GitHub
git init
git add .
git commit -m "Initial yellow page"
git branch -M main
git remote add origin git@github.com:<你的用户名>/<仓库名>.git
git push -u origin main
```

### 在 Cloudflare 控制台连接仓库

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. 点击 **Create** → **Pages** → **Connect to Git**
3. 选择刚才推上去的 GitHub 仓库
4. 构建配置：
   - **Framework preset**: `None`
   - **Build command**: 留空
   - **Build output directory**: `/`（或 `.`）
5. 点击 **Save and Deploy**

### 之后

每次 `git push`，Cloudflare 都会自动重新部署。约 30 秒内生效。

## 自定义域名（可选）

部署成功后，在 Pages 项目页 → **Custom domains** → **Set up a custom domain** → 输入你的域名。如果域名也托管在 Cloudflare，自动配 DNS；否则按提示加 CNAME。

## 设计参考

- 主题色渐变：`#3ab7ff → #a78bfa`（青蓝→紫）
- 字体：系统栈，自动适配中日英
- 暗 / 浅色：右上角太阳/月亮按钮，记忆在 `localStorage`
- 响应式：宽度 ≥1280px 显示侧边广告位，否则隐藏

## License

MIT
