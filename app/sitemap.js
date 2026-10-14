const SITE = "https://linkinbio-nova.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/karya", "/kolaborasi"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
