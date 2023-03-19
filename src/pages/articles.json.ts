import { getCollection, CollectionEntry } from "astro:content";

export const get = async () => {
  const articles = await getCollection("blog");
  return {
    body: JSON.stringify({
      articles: articles
        .sort((a, b) => b.data.id - a.data.id)
        .map((article: CollectionEntry<"blog">) => {
          return {
            title: article.data.title,
            slug: article.slug,
            description: article.data.description,
            date: article.data.date,
            image: article.data.image,
          };
        }),
    }),
  };
};
