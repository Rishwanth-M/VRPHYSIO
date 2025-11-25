import { posts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const postIndex = posts.findIndex((p) => p.slug === params.slug);
  const post = posts[postIndex];

  if (!post) return notFound();

  const nextPost = posts[postIndex + 1];
  const prevPost = posts[postIndex - 1];

  return (
    <div className="py-10 max-w-3xl mx-auto">
      <Link href="/blog" className="text-emerald mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">{post.description}</p>

      <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <article className="prose prose-emerald max-w-none">
        {post.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      {/* Share buttons */}
      <div className="mt-10 flex gap-4">
        <a
          target="_blank"
          href={`https://wa.me/?text=${encodeURIComponent(
            post.title + " - " + "https://yourwebsite.com/blog/" + post.slug
          )}`}
          className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          Share on WhatsApp
        </a>

        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            "https://yourwebsite.com/blog/" + post.slug
          )}`}
          className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          Facebook
        </a>
      </div>

      {/* Prev / Next Navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t">
        {prevPost ? (
          <Link className="text-emerald" href={`/blog/${prevPost.slug}`}>
            ← {prevPost.title}
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link className="text-emerald" href={`/blog/${nextPost.slug}`}>
            {nextPost.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
