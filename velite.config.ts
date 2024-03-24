import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const meta = s.object({
  title: s.string(),
  description: s.string().max(160),
  socialBanner: s.string()
});

const tags = defineCollection({
  name: "Tag",
  pattern: "tags/index.yml",
  schema: s
    .object({
      name: s.string(),
      slug: s.slug("global", ["admin", "login"]),
      posts: s.number().default(0),
    })
    .transform((data) => ({ ...data, permalink: `/tags/${data.slug}` })),
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.md",
  schema: s
    .object({
      title: s.string(),
      slug: s.slug("post"),
      draft: s.boolean().default(false),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      excerpt: s.string(),
      tags: s.array(s.string()),
      meta: meta,
      metadata: s.metadata(),
      content: s.markdown(),
    })
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  markdown: { rehypePlugins: [rehypePrettyCode] },
  collections: { tags, posts },
  prepare: ({ tags, posts }) => {
    const docs = posts.filter(
      (i) => process.env.NODE_ENV !== "production" || !i.draft
    );

    tags.forEach((i) => {
      i.posts = docs.filter((j) => j.tags.includes(i.name)).length;
    });
  },
});
