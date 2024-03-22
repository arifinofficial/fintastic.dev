import Link from "@/components/Link";
import { posts } from "#site/content";
import { slugify } from "@/utils/stringFormat";
import Tag from "@/components/Tag";

export default async function Home() {
  return (
    <>
      <div className="mt-14 md:mt-24 mb-40">
        <h1 className="font-bold text-5xl md:text-7xl mb-4">Hello, folks! I&apos;m Arifin N</h1>
        <p className="text-lg mb-10">
          A Fullstack Engineer from Indonesia with 8+ years of experience. I&apos;m a
          passionate software engineer with a love for building innovative
          solutions and pushing the boundaries of technology. With a background
          as Software Engineer, I bring a wealth of experience and expertise to
          every project I undertake.
        </p>
        <div className="">
          <Link
            href="https://github.com/arifinofficial"
            className="mb-3 xl:md-0 block md:inline-block border border-gray-500 py-3 px-4 mr-0 md:mr-8"
            aria-label="Github"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block mr-3"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="inline-block">Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/arifinofficial"
            className="mb-3 xl:md-0 block md:inline-block border border-gray-500 py-3 px-4 mr-0 md:mr-8"
            aria-label="LinkedIn"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              className="inline-block mr-3"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              />
            </svg>
            <span className="inline-block">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/arifinofficial"
            className="mb-3 xl:md-0 block md:inline-block border border-gray-500 py-3 px-4 mr-0 md:mr-8"
            aria-label="Twitter"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              className="inline-block mr-3"
            >
              <path
                fill="currentColor"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>
            <span className="inline-block">Twitter</span>
          </Link>
          <Link
            href="mailto:arifinofficial@outlook.com"
            className="mb-3 xl:md-0 block md:inline-block border border-gray-500 py-3 px-4 mr-0 md:mr-8"
            aria-label="email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline-block mr-3"
              width={28}
              height={28}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="inline-block">Email</span>
          </Link>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recent Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My desire to practice my skills and share my acquired knowledge
            fuels my endeavors.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <li key={post.slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toDateString()}
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
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
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${post.title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
