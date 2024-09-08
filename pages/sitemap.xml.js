import { getAllPostsWithSlug } from "../lib/api"
const Sitemap = () => null; // Component này không cần render gì cả
export const getServerSideProps = async ({ res }) => {
    try {
        const allPosts = await getAllPostsWithSlug();

        const posts = allPosts.edges.map(
            (post) => ({ url: `/${post.node.slug}`, dateGmt: post.node.dateGmt })
        );
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://blog.amycos.vn/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  ${[
                ...posts,
            ]
                .map(
                    ({ url, dateGmt }) => `<url>
    <loc>https://blog.amycos.vn${url}/</loc>
        <lastmod>${new Date(dateGmt).toISOString()}</lastmod>
    </url>`
                )
                .join('')}
    </urlset>`;
        // 6. Thiết lập header và trả về response
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.statusCode = 500;
        res.end();
        return {
            props: {},
        };
    }
}
export default Sitemap;