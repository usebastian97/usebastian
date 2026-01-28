import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET({ site }: { site?: URL }) {
  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://www.usebastian.com';
  const allPosts = await getCollection('blog', ({ data }) => !data.draft);
  const posts = allPosts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  const items = posts
    .map((post) => {
      const link = `${siteUrl}/blog/${post.slug}`;
      return `
      <item>
        <title>${escapeXml(post.data.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <description>${escapeXml(post.data.description)}</description>
        <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Sebastian Georgian Utoiu – Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Articles on Microsoft 365 architecture, Power Platform governance, security and compliance, and Microsoft 365 Copilot adoption.</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
