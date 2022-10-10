import frontMatter from 'front-matter';

export type AttributesType = {
  categories: string[];
  date: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
};

export const getAttributesOfContent = (contents: string): AttributesType => {
  return frontMatter(contents).attributes as AttributesType;
};

export const getFrontMatterOfContent = (contents: string) => {
  return frontMatter(contents);
};
