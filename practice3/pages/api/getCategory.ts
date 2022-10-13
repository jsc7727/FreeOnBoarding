import { AttributesType, getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  if (req.method === 'GET' && typeof category) {
    const files = getAllFiles(`./__posts/${category}`);
    const postList: AttributesType[] = files.map(({ content }) => getAttributesOfContent(content));
    res.status(200).send(postList);
  } else {
    res.status(400);
  }
}
