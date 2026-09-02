const PRIVATE_SITES = [
  {
    id: "pve_office_1",
    url: "https://192.168.5.203:8006",
    category: "homelab",
    name: "办公室 PVE1",
    desc: {
      zh: "办公室 Proxmox VE 节点 skywooo（192.168.5.203）",
      en: "Office Proxmox VE node skywooo (192.168.5.203)",
      ja: "オフィス Proxmox VE ノード skywooo（192.168.5.203）"
    },
    free: {
      zh: "本地部署 · 仅限办公室局域网访问",
      en: "Self-hosted · office LAN only",
      ja: "セルフホスト・オフィス LAN のみ"
    }
  },
  {
    id: "pve_office_2",
    url: "https://192.168.5.207:8006",
    category: "homelab",
    name: "办公室 PVE2",
    desc: {
      zh: "办公室 Proxmox VE 节点 szpve（192.168.5.207）",
      en: "Office Proxmox VE node szpve (192.168.5.207)",
      ja: "オフィス Proxmox VE ノード szpve（192.168.5.207）"
    },
    free: {
      zh: "本地部署 · 仅限办公室局域网访问",
      en: "Self-hosted · office LAN only",
      ja: "セルフホスト・オフィス LAN のみ"
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
  {
    id: "truenas_office_1",
    url: "https://192.168.5.197",
    category: "homelab",
    name: "办公室 TrueNAS 1",
    desc: {
      zh: "办公室 TrueNAS SCALE 存储服务器（192.168.5.197）",
      en: "Office TrueNAS SCALE storage server (192.168.5.197)",
      ja: "オフィス TrueNAS SCALE ストレージサーバー（192.168.5.197）"
    },
    free: {
      zh: "本地部署 · 仅限办公室局域网访问",
      en: "Self-hosted · office LAN only",
      ja: "セルフホスト・オフィス LAN のみ"
    }
  },
  {
    id: "truenas_office_2",
    url: "https://192.168.5.59",
    category: "homelab",
    name: "办公室 TrueNAS 2",
    desc: {
      zh: "办公室 TrueNAS SCALE 存储服务器（192.168.5.59）",
      en: "Office TrueNAS SCALE storage server (192.168.5.59)",
      ja: "オフィス TrueNAS SCALE ストレージサーバー（192.168.5.59）"
    },
    free: {
      zh: "本地部署 · 仅限办公室局域网访问",
      en: "Self-hosted · office LAN only",
      ja: "セルフホスト・オフィス LAN のみ"
    }
  }
];

function ipv4ToNum(ip) {
  const p = ip.split(".");
  if (p.length !== 4) return NaN;
  let n = 0;
  for (const s of p) {
    const v = Number(s);
    if (!Number.isInteger(v) || v < 0 || v > 255) return NaN;
    n = (n * 256) + v;
  }
  return n >>> 0;
}

function matchIpv4Cidr(ip, cidr) {
  const [net, bitsStr] = cidr.includes("/") ? cidr.split("/") : [cidr, "32"];
  const bits = parseInt(bitsStr, 10);
  if (!(bits >= 0 && bits <= 32)) return false;
  const ipN = ipv4ToNum(ip);
  const netN = ipv4ToNum(net);
  if (Number.isNaN(ipN) || Number.isNaN(netN)) return false;
  const mask = bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
  return (ipN & mask) === (netN & mask);
}

function isTrusted(ip, allowlistCsv) {
  if (!ip || !allowlistCsv) return false;
  const entries = allowlistCsv.split(",").map(s => s.trim()).filter(Boolean);
  return entries.some(entry => matchIpv4Cidr(ip, entry));
}

export function onRequestGet({ request, env }) {
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const trusted = isTrusted(ip, env.TRUSTED_IPS || "");
  const body = JSON.stringify(trusted ? PRIVATE_SITES : []);
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
