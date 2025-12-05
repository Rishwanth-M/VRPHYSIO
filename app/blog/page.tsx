"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "@/lib/posts";

type Comment = {
  name: string;
  message: string;
  createdAt: Date;
};

export default function BlogPage() {
  const [commentsByPost, setCommentsByPost] = useState<
    Record<string, Comment[]>
  >({});

  const handleAddComment = (
    slug: string,
    formData: FormData
  ) => {
    const name = (formData.get("name") as string)?.trim() || "Guest";
    const message = (formData.get("message") as string)?.trim();

    if (!message) return;

    setCommentsByPost((prev) => ({
      ...prev,
      [slug]: [
        ...(prev[slug] || []),
        { name, message, createdAt: new Date() }
      ]
    }));
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,3.5fr)_minmax(260px,1fr)] gap-10">
        {/* MAIN CONTENT */}
        <main className="space-y-20">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              Physiotherapy Blog & Clinical Insights
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Evidence-based articles on rehabilitation, VR integration, pain
              science, women&apos;s health, and strength-based physiotherapy — written
              for patients, caregivers, and health professionals.
            </p>
          </header>

          {posts.map((post, index) => {

            return (
              <motion.section
                key={post.slug}
                id={post.slug}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* META */}
                <div className="mb-2 text-xs text-gray-500 flex flex-wrap gap-3 items-center">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                </div>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-emerald/5 text-emerald border border-emerald/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* HEADER IMAGE */}
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain bg-black/5"
                  />
                </div>

                {/* AI SUMMARY HIGHLIGHT */}
                <div className="mb-6 border-l-4 border-emerald bg-emerald/5 px-4 py-3 text-sm text-gray-800 rounded-r-xl">
                  <div className="font-semibold mb-1">
                    Key Takeaway
                  </div>
                  <p>{post.summary}</p>
                </div>

                {/* MARKDOWN CONTENT */}
                <article className="prose prose-emerald max-w-none prose-headings:scroll-mt-28">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ src, alt }) => (
                        <div className="relative w-full h-64 my-4 rounded-2xl overflow-hidden">
                          {src && (
                            <Image
                              src={src}
                              alt={alt || ""}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      )
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </article>


                {/* Divider */}
                {index < posts.length - 1 && (
                  <hr className="mt-10 border-gray-200" />
                )}
              </motion.section>
            );
          })}
        </main>

        {/* FLOATING TOC SIDEBAR */}
        <aside className="hidden lg:block sticky top-28 self-start">
          <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
            <h2 className="text-sm font-semibold mb-3">
              Articles in this page
            </h2>
            <ul className="space-y-2 text-sm">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`#${post.slug}`}
                    className="text-emerald hover:underline leading-snug"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t">
              <Link href="/book-appointment" className="text-xs text-emerald">
                Book a physiotherapy consult →
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
