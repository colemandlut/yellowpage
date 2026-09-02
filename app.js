// =============================================================
//  YELLOW PAGE  ·  常用站点导航
//
//  添加新站点：复制下面 SITES 数组里任意一项，改字段即可（每项都自带 zh/en/ja）。
//  添加新分类：在 CATEGORIES 中加一行，然后让站点的 category 字段引用它的 id。
//  添加新语言：在 I18N 中加一个键，并给每个 SITES / CATEGORIES 的 desc/free/name 加对应字段。
// =============================================================

const ADSENSE = {
  pubId:     "ca-pub-XXXXXXXXXXXXXXXX",  // ← 替换为你的 AdSense 发布商 ID
  leftSlot:  "1111111111",               // ← 替换为左侧广告位 slot ID
  rightSlot: "2222222222",               // ← 替换为右侧广告位 slot ID
  enabled:   false                        // ← 全部替换好后改为 true
};

const CATEGORIES = [
  { id: "ai_chat",        icon: "🤖", name: { zh: "AI 对话",       en: "AI Chat",          ja: "AI チャット" } },
  { id: "api_aggregator", icon: "🔌", name: { zh: "API 聚合",       en: "API Gateways",     ja: "API ゲートウェイ" } },
  { id: "ai_workflow",    icon: "🎨", name: { zh: "AI 工作流",      en: "AI Workflows",     ja: "AI ワークフロー" } },
  { id: "cloud",          icon: "☁️", name: { zh: "云与边缘",       en: "Cloud & Edge",     ja: "クラウド・エッジ" } },
  { id: "db",             icon: "🗄️", name: { zh: "数据库 / 后端",  en: "Database & BaaS",  ja: "データベース・BaaS" } },
  { id: "learn",          icon: "📚", name: { zh: "学习资源",       en: "Resources",        ja: "学習リソース" } },
  { id: "homelab",        icon: "🖥️", name: { zh: "家庭实验室",     en: "Homelab",          ja: "ホームラボ" } }
];

const SITES = [
  // —— AI 对话 ——
  {
    id: "chatgpt",
    url: "https://chatgpt.com",
    category: "ai_chat",
    name: "ChatGPT",
    desc: {
      zh: "OpenAI 旗舰对话产品，支持联网、文件、图像、语音和 GPTs 应用",
      en: "OpenAI's flagship chat — web, files, images, voice and custom GPTs",
      ja: "OpenAI のフラッグシップチャット。ウェブ・ファイル・画像・音声・GPTs に対応"
    },
    free: {
      zh: "免费层每日有限次 GPT-5 mini，Plus $20/月",
      en: "Free GPT-5 mini with daily limits; Plus $20/mo",
      ja: "無料枠で GPT-5 mini を1日数回；Plus は月20ドル"
    }
  },
  {
    id: "claude",
    url: "https://claude.ai",
    category: "ai_chat",
    name: "Claude",
    desc: {
      zh: "Anthropic 出品，长上下文 + Artifacts + Projects，写代码尤其稳",
      en: "Anthropic's chat with long context, Artifacts and Projects — strong at code",
      ja: "Anthropic のチャット。長文脈・Artifacts・Projects 対応、コード生成に強い"
    },
    free: {
      zh: "免费可用 Sonnet（限量），Pro $20/月",
      en: "Free Sonnet with daily limits; Pro $20/mo",
      ja: "無料で Sonnet（制限あり）、Pro は月20ドル"
    }
  },
  {
    id: "deepseek",
    url: "https://chat.deepseek.com",
    category: "ai_chat",
    name: "DeepSeek",
    desc: {
      zh: "国产开源大模型，对话免费且无明显限速，API 价格远低于 OpenAI",
      en: "Open-weight Chinese LLM — free chat with no hard limits, API far cheaper than OpenAI",
      ja: "中国発のオープン LLM。チャット無料・厳しい制限なし、API は OpenAI より格安"
    },
    free: {
      zh: "网页对话完全免费；API 约 $0.14/M 输入 token",
      en: "Web chat free; API ~$0.14 / M input tokens",
      ja: "ウェブチャット無料；API は約 $0.14/M 入力トークン"
    }
  },

  // —— API 聚合 ——
  {
    id: "poloapi",
    url: "https://poloapi.com",
    category: "api_aggregator",
    name: "PoloAPI",
    desc: {
      zh: "国内可直连的 LLM API 聚合中转，OpenAI 兼容协议接入 GPT/Claude/Gemini 等",
      en: "Aggregator routing OpenAI-compatible calls to GPT, Claude, Gemini — accessible from China",
      ja: "OpenAI 互換で GPT・Claude・Gemini などに繋がる API 中継。中国本土からもアクセス可"
    },
    free: {
      zh: "注册赠送试用额度，按 token 用量计费",
      en: "Free trial credits on signup; pay-as-you-go per token",
      ja: "登録時に無料クレジット、トークン従量課金"
    }
  },

  // —— AI 工作流 ——
  {
    id: "runninghub",
    url: "https://www.runninghub.cn",
    category: "ai_workflow",
    name: "RunningHub",
    desc: {
      zh: "在线 ComfyUI 工作流云平台，无需本地显卡即可跑 SD / Flux / 视频生成",
      en: "Cloud ComfyUI platform — run SD / Flux / video workflows without a local GPU",
      ja: "クラウド ComfyUI プラットフォーム。GPU 不要で SD / Flux / 動画生成を実行"
    },
    free: {
      zh: "注册赠送 RH 币体验额度",
      en: "Free RH coin credits on signup",
      ja: "登録時に RH コインの無料クレジット"
    }
  },

  // —— 云与边缘 ——
  {
    id: "cloudflare",
    url: "https://www.cloudflare.com",
    category: "cloud",
    name: "Cloudflare",
    desc: {
      zh: "全球 CDN + Workers + Pages + R2 + D1 + KV + Tunnel，边缘平台一站式",
      en: "Global CDN plus Workers, Pages, R2, D1, KV, Tunnel — full edge stack",
      ja: "グローバル CDN・Workers・Pages・R2・D1・KV・Tunnel まで揃うエッジ基盤"
    },
    free: {
      zh: "Workers 10万请求/天，Pages 不限部署，R2 10 GB，D1 5 GB",
      en: "Workers 100K req/day, Pages unlimited builds, R2 10 GB, D1 5 GB",
      ja: "Workers 10万リクエスト/日、Pages 無制限、R2 10 GB、D1 5 GB"
    }
  },
  {
    id: "fly",
    url: "https://fly.io",
    category: "cloud",
    name: "Fly.io",
    desc: {
      zh: "全球 30+ 边缘机房的容器托管，原生支持 Postgres、Redis 和持久卷",
      en: "Container hosting in 30+ edge regions, native Postgres / Redis / persistent volumes",
      ja: "30以上のエッジ拠点でのコンテナ配置。Postgres・Redis・永続ボリューム対応"
    },
    free: {
      zh: "$5/月免费试用额度；超出按用量付费",
      en: "$5/mo trial credit; pay-as-you-go beyond",
      ja: "月5ドルの無料試用枠、以降は従量課金"
    }
  },
  {
    id: "vercel",
    url: "https://vercel.com",
    category: "cloud",
    name: "Vercel",
    desc: {
      zh: "Next.js 团队出品的前端部署平台，git push 即上线，预览环境与生产无缝切换",
      en: "Frontend deployment platform from the Next.js team — git push to deploy, instant preview envs",
      ja: "Next.js チーム製のフロントエンド配信基盤。git push で即デプロイ、プレビュー環境も自動生成"
    },
    free: {
      zh: "Hobby 计划：100 GB 流量 / 不限部署 / 自动 HTTPS / 边缘函数",
      en: "Hobby: 100 GB bandwidth, unlimited deploys, auto HTTPS, edge functions",
      ja: "Hobby プラン：100 GB 帯域 / デプロイ無制限 / 自動 HTTPS / エッジ関数"
    }
  },

  // —— 数据库 / 后端 ——
  {
    id: "supabase",
    url: "https://supabase.com",
    category: "db",
    name: "Supabase",
    desc: {
      zh: "开源的 Firebase 替代品 — Postgres + Auth + 存储 + Edge Functions 一站式",
      en: "Open-source Firebase alternative — Postgres + Auth + Storage + Edge Functions",
      ja: "オープンソースの Firebase 代替。Postgres・認証・ストレージ・エッジ関数"
    },
    free: {
      zh: "500 MB 数据库 / 5 GB 流量 / 50K 月活 / 1 GB 存储",
      en: "500 MB DB / 5 GB egress / 50K MAU / 1 GB storage",
      ja: "500 MB DB / 5 GB 転送 / 50K MAU / 1 GB ストレージ"
    }
  },
  {
    id: "upstash",
    url: "https://upstash.com",
    category: "db",
    name: "Upstash",
    desc: {
      zh: "Serverless Redis、Kafka、QStash 和 Vector，按请求计费，冷启动友好",
      en: "Serverless Redis, Kafka, QStash and Vector — pay-per-request, serverless-friendly",
      ja: "サーバーレス Redis / Kafka / QStash / Vector。リクエスト課金で SaaS と相性◎"
    },
    free: {
      zh: "Redis 10K 命令/天 / 256 MB；QStash 500 次/天",
      en: "Redis 10K cmds/day / 256 MB; QStash 500 msgs/day",
      ja: "Redis 10K コマンド/日 / 256 MB；QStash 500 件/日"
    }
  },

  // —— 家庭实验室 ——
  {
    id: "pve_szpve",
    url: "https://192.168.5.207:8006",
    category: "homelab",
    name: "PVE · szpve",
    desc: {
      zh: "Proxmox VE 节点 szpve（192.168.5.207），家庭虚拟化主机",
      en: "Proxmox VE node szpve (192.168.5.207) — home virtualization host",
      ja: "Proxmox VE ノード szpve（192.168.5.207）。家庭用仮想化ホスト"
    },
    free: {
      zh: "本地部署 · 仅限局域网访问",
      en: "Self-hosted · LAN only",
      ja: "セルフホスト・LAN 内のみ"
    }
  },
  {
    id: "pve_skywooo",
    url: "https://192.168.5.203:8006",
    category: "homelab",
    name: "PVE · skywooo",
    desc: {
      zh: "Proxmox VE 节点 skywooo（192.168.5.203），家庭虚拟化主机",
      en: "Proxmox VE node skywooo (192.168.5.203) — home virtualization host",
      ja: "Proxmox VE ノード skywooo（192.168.5.203）。家庭用仮想化ホスト"
    },
    free: {
      zh: "本地部署 · 仅限局域网访问",
      en: "Self-hosted · LAN only",
      ja: "セルフホスト・LAN 内のみ"
    }
  },
  {
    id: "pve_home",
    url: "https://192.168.2.217:8006",
    category: "homelab",
    name: "PVE · 家里",
    desc: {
      zh: "家里的 Proxmox VE 节点（192.168.2.217）",
      en: "Home Proxmox VE node (192.168.2.217)",
      ja: "自宅の Proxmox VE ノード（192.168.2.217）"
    },
    free: {
      zh: "本地部署 · 仅限家庭网络访问",
      en: "Self-hosted · home LAN only",
      ja: "セルフホスト・自宅 LAN のみ"
    }
  },

  // —— 学习资源 ——
  {
    id: "lastoutpost",
    url: "https://thelastoutpostworkshop.github.io/",
    category: "learn",
    name: "The Last Outpost Workshop",
    desc: {
      zh: "GitHub Pages 个人站，AI / ComfyUI 工作流教程与开源资源汇总",
      en: "Personal GitHub Pages site — AI / ComfyUI tutorials and open-source resources",
      ja: "GitHub Pages の個人サイト。AI / ComfyUI チュートリアルとオープンソースまとめ"
    },
    free: {
      zh: "完全免费",
      en: "Completely free",
      ja: "完全無料"
    }
  }
];

const I18N = {
  zh: {
    brand:             "Yellow Page",
    hero_title:        "我的常用站点",
    hero_subtitle:     "常用站点速查 · 含免费额度信息",
    search_placeholder:"搜索站点…",
    visit:             "访问 →",
    empty:             "没有匹配的站点",
    sites_label:       "个站点",
    footer:            "由 Cloudflare Pages 托管",
    ad_hint:           "在 app.js 中设置 ADSENSE.enabled = true 启用"
  },
  en: {
    brand:             "Yellow Page",
    hero_title:        "My Frequent Sites",
    hero_subtitle:     "A quick index of frequently used sites with free-tier info",
    search_placeholder:"Search sites…",
    visit:             "Visit →",
    empty:             "No sites match your search",
    sites_label:       "sites",
    footer:            "Hosted on Cloudflare Pages",
    ad_hint:           "Set ADSENSE.enabled = true in app.js to enable"
  },
  ja: {
    brand:             "Yellow Page",
    hero_title:        "よく使うサイト",
    hero_subtitle:     "よく使うサイトの一覧 · 無料枠情報付き",
    search_placeholder:"サイトを検索…",
    visit:             "アクセス →",
    empty:             "一致するサイトがありません",
    sites_label:       "件",
    footer:            "Cloudflare Pages でホスティング",
    ad_hint:           "app.js で ADSENSE.enabled = true に設定"
  }
};

// ---------- state ----------
const SUPPORTED_LANGS = ["zh", "en", "ja"];

function detectLang() {
  const stored = localStorage.getItem("yp_lang");
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : "en";
}

function detectTheme() {
  const stored = localStorage.getItem("yp_theme");
  if (stored === "light" || stored === "dark") return stored;
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

let lang = detectLang();
let theme = detectTheme();
let query = "";

// ---------- helpers ----------
function favicon(url) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  } catch {
    return "";
  }
}

function domain(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function localized(field) {
  if (typeof field === "string") return field;
  if (!field) return "";
  return field[lang] || field.en || field.zh || "";
}

function matchesQuery(site, q) {
  if (!q) return true;
  const haystack = [
    site.name,
    localized(site.desc),
    localized(site.free),
    site.url,
    // also search across all languages so query in any language works
    site.desc.zh, site.desc.en, site.desc.ja,
    site.free.zh, site.free.en, site.free.ja
  ].join(" ").toLowerCase();
  return haystack.includes(q.toLowerCase());
}

// ---------- render ----------
function renderUI() {
  document.documentElement.lang = lang;
  document.documentElement.dataset.theme = theme;
  document.title = `${t("hero_title")} · Yellow Page`;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split("|");
    el.setAttribute(attr, t(key));
  });

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";

  const langSel = document.getElementById("lang-switch");
  if (langSel) langSel.value = lang;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const counter = document.getElementById("site-count");

  const filtered = SITES.filter(s => matchesQuery(s, query));
  if (counter) counter.textContent = filtered.length;
  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const byCat = new Map();
  for (const s of filtered) {
    if (!byCat.has(s.category)) byCat.set(s.category, []);
    byCat.get(s.category).push(s);
  }

  const html = CATEGORIES.filter(c => byCat.has(c.id)).map(cat => {
    const items = byCat.get(cat.id);
    const cards = items.map(s => `
      <a class="card" href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">
        <div class="card-head">
          <div class="card-icon">
            <img src="${escapeHtml(favicon(s.url))}" alt="" loading="lazy" referrerpolicy="no-referrer"
                 onerror="this.style.display='none';this.parentElement.textContent='${escapeHtml(s.name.charAt(0).toUpperCase())}';">
          </div>
          <div class="card-meta">
            <div class="card-name">${escapeHtml(s.name)}</div>
            <div class="card-domain">${escapeHtml(domain(s.url))}</div>
          </div>
          <span class="card-arrow">↗</span>
        </div>
        <p class="card-desc">${escapeHtml(localized(s.desc))}</p>
        <span class="badge"><span class="badge-text">${escapeHtml(localized(s.free))}</span></span>
      </a>
    `).join("");
    return `
      <section class="category">
        <div class="category-head">
          <span class="icon">${cat.icon}</span>
          <h2>${escapeHtml(localized(cat.name))}</h2>
          <span class="count">${items.length}</span>
          <span class="category-line"></span>
        </div>
        <div class="cards">${cards}</div>
      </section>`;
  }).join("");

  grid.innerHTML = html;
}

// ---------- AdSense ----------
function loadAdSense() {
  if (!ADSENSE.enabled) return;
  if (!ADSENSE.pubId || ADSENSE.pubId.includes("XXXX")) {
    console.warn("[AdSense] disabled: replace pubId in app.js");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE.pubId}`;
  document.head.appendChild(script);

  ["left", "right"].forEach(side => {
    const slot = side === "left" ? ADSENSE.leftSlot : ADSENSE.rightSlot;
    const rail = document.querySelector(`.ad-rail-${side}`);
    if (!rail || !slot) return;
    rail.innerHTML = `
      <ins class="adsbygoogle"
           style="display:inline-block;width:160px;height:600px"
           data-ad-client="${ADSENSE.pubId}"
           data-ad-slot="${slot}"></ins>`;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
    catch (e) { console.warn("[AdSense] push failed:", e); }
  });
}

// ---------- events ----------
function setLang(next) {
  lang = next;
  localStorage.setItem("yp_lang", lang);
  renderUI();
  renderGrid();
}
function setTheme(next) {
  theme = next;
  localStorage.setItem("yp_theme", theme);
  renderUI();
}
function setQuery(q) {
  query = q;
  renderGrid();
}

// ---------- init ----------
function init() {
  document.documentElement.dataset.theme = theme;
  document.documentElement.lang = lang;

  renderUI();
  renderGrid();

  document.getElementById("search").addEventListener("input", e => setQuery(e.target.value));
  document.getElementById("lang-switch").addEventListener("change", e => setLang(e.target.value));
  document.getElementById("theme-toggle").addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));

  loadAdSense();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
