"use client"

import Giscus from "@giscus/react";
import siteConfig from "@/config/config";

const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo={siteConfig.giscus.dataRepo}
      repoId={siteConfig.giscus.repoId}
      category={siteConfig.giscus.category}
      categoryId={siteConfig.giscus.categoryId}
      mapping={siteConfig.giscus.dataMapping}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="id"
      loading="lazy"
    />
  );
};

export default Comment;
