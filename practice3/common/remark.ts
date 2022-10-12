import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export const markdownParser = async (mdText: string) => {
  const res = String(
    await unified().use(remarkParse).use(remarkRehype).use(rehypeFormat).use(rehypeStringify).process(mdText),
  );
  return res;
};
