import React from "react";
import Link from "next/link";
import { posts, tags } from "#site/content";
import { slugify } from "@/utils/stringFormat";
import SEO from "@/utils/SEO";
import Tag from "@/components/Tag";
import siteConfig from "@/config/config";

export const metadata = SEO({
  title: "Blog",
  slug: "/blog",
  description: siteConfig.description,
});

const Page = async () => {
  return (
    <div className="flex sm:space-x-24">
      <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
        <div className="px-6 py-4">
          <Link
            href={`/blog`}
            className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            All Tags
          </Link>
          <ul>
            {tags.length === 0 && "No tags found."}
            {tags.map((tag) => {
              return (
                <li key={tag.slug} className="my-3">
                  <Link
                    href={tag.permalink}
                    className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                    aria-label={`View posts tagged ${tag.name}`}
                  >
                    {tag.name} ({tag.posts})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug} className="py-5">
                <article className="flex flex-col space-y-2 xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toDateString()}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag) => (
                          <Tag
                            key={tag}
                            permalink={`/tags/${slugify(tag)}`}
                            text={tag}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {post.excerpt}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
