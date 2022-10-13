import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export const markdownParser = async (mdText: string) => {
  const res = String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(mdText),
  );
  return res;
};
