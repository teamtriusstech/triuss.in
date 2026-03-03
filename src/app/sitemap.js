import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
    const baseUrl = "https://www.triuss.in";

    // Dynamic Blog Posts
    const posts = getAllPosts();
    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    // Service Pages (Synchronized with actual directory structure)
    const services = [
        "web-development-bangalore",
        "mobile-app-development",
        "ecommerce-solutions-bangalore",
        "whatsapp-commerce-bangalore",
        "digital-marketing-bangalore",
        "ai-call-agents-bangalore",
        "social-media-management",
        "ugc-product-ads",
    ];

    const serviceUrls = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        ...serviceUrls,
        ...blogUrls,
    ];
}
