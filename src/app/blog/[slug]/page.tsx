import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { slugify } from "@/utils/stringFormat";
import Tag from "@/components/Tag";
import Link from "@/components/Link";
import SEO from "@/utils/SEO";

interface PostProps {
  params: {
    slug: string;
  };
}

const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};

export const generateMetadata = ({ params }: PostProps): Metadata => {
  console.log(params.slug)
  const post = getPostBySlug(params.slug);
  if (post == null) return {};
  return SEO({
    title: post.meta.title,
    slug: post.permalink,
    description: post.meta.description,
    image: post.meta.socialBanner
  });
};

export const generateStaticParams = (): PostProps["params"][] => {
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function Page({ params }: PostProps) {
  const post = getPostBySlug(params.slug);

  if (post == null) notFound();

  return (
    <article>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toDateString()}
                  </time>
                  {` • `}
                  {post.metadata.readingTime} min read
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {post.title}
              </h1>
            </div>
          </div>
        </header>

        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
          <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                {/* {authorDetails.map((author) => ( */}
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/author-arifin-n.jpg"
                    width={38}
                    height={38}
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900 dark:text-gray-100">
                      Arifin N
                    </dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      <Link
                        href="https://twitter.com/arifinofficial"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        @Twitter
                      </Link>
                    </dd>
                  </dl>
                </li>
                {/* ))} */}
              </ul>
            </dd>
          </dl>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={"/"} rel="nofollow">
                Discuss on Twitter
              </Link>
              {` • `}
              <Link href={"/"}>View on GitHub</Link>
            </div>
            <div
              className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
              id="comment"
            ></div>
          </div>
          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap">
                  {post.tags.map((tag: string) => (
                    <Tag
                      key={tag}
                      permalink={`/tags/${slugify(tag)}`}
                      text={tag}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/blog`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
              >
                &larr; Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
