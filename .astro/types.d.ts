declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"complete-guide-to-mastering-web-development.md": {
  id: "complete-guide-to-mastering-web-development.md",
  slug: "complete-guide-to-mastering-web-development",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-add-disqus-to-your-nuxt-3-app.mdx": {
  id: "how-to-add-disqus-to-your-nuxt-3-app.mdx",
  slug: "how-to-add-disqus-to-your-nuxt-3-app",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-create-and-publish-vue-component-to-npm.md": {
  id: "how-to-create-and-publish-vue-component-to-npm.md",
  slug: "how-to-create-and-publish-vue-component-to-npm",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"six-apis-and-creative-ideas-for-your-next-project.md": {
  id: "six-apis-and-creative-ideas-for-your-next-project.md",
  slug: "six-apis-and-creative-ideas-for-your-next-project",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"what-is-github-student-developer-pack-and-why-you-should-get-it.md": {
  id: "what-is-github-student-developer-pack-and-why-you-should-get-it.md",
  slug: "what-is-github-student-developer-pack-and-why-you-should-get-it",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
