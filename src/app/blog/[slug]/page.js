import { getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogPostPage from "./BlogPostPage";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.frontmatter.title} | Triuss Blog`,
        description: post.frontmatter.excerpt,
        alternates: {
            canonical: `https://www.triuss.in/blog/${slug}`,
        },
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.excerpt,
            url: `https://www.triuss.in/blog/${slug}`,
            type: 'article',
            images: [
                {
                    url: post.frontmatter.coverImage,
                    alt: post.frontmatter.title,
                }
            ],
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <BlogPostPage post={post}>
                <MDXRemote source={post.content} components={mdxComponents} />
            </BlogPostPage>
            <Contact />
            <Footer />
        </div>
    );
}
