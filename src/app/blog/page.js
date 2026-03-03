import { getAllPosts } from "@/lib/blog";
import BlogListingPage from "./BlogListingPage";

export const metadata = {
    title: "Official Blog | Triuss Digital Growth Agency Bangalore",
    description: "Explore the Triuss Blog for expert insights on web development, SEO, and digital growth trends in Bangalore. Stay ahead with our latest tech tips and strategies.",
    keywords: "Bangalore Tech Blog, Web Development Trends, SEO Strategies, Digital Marketing Insights Bangalore",
    alternates: {
        canonical: 'https://www.triuss.in/blog',
    },
};

export default function Page() {
    const posts = getAllPosts();
    return <BlogListingPage posts={posts} />;
}
