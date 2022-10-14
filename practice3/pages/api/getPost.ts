import { getFrontMatterOfContent } from '@common/frontMatter';
import { getFileOfSlug } from '@common/fs';
import { markdownParser } from '@common/remark';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getPost = async (category: string, slug: string) => {
  const file = getFileOfSlug(category, slug);
  const { attributes, body } = getFrontMatterOfContent(file.content);
  const content = await markdownParser(body);
  return { filename: file.filename, attributes, content };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, slug } = req.query;
  if (req.method === 'GET' && typeof category === 'string' && typeof slug === 'string') {
    res.status(200).send(getPost(category, slug));
  } else {
    res.status(400).send({ error: 'error' });
  }
}
