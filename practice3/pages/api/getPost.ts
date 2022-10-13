import { getFrontMatterOfContent } from '@common/frontMatter';
import { getFileOfSlug } from '@common/fs';
import { markdownParser } from '@common/remark';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug, category } = req.query;
  if (req.method === 'GET' && typeof slug === 'string' && typeof category === 'string') {
    const file = getFileOfSlug(category, slug);
    const { attributes, body } = getFrontMatterOfContent(file.content);
    const content = await markdownParser(body);
    res.status(200).send({ filename: file.filename, attributes, content });
  } else {
    res.status(400).send({ error: 'error' });
  }
}
