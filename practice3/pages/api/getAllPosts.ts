import { AttributesType, getAttributesOfContent } from '@common/frontMatter';
import { getFileList } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const data = getFileList();
    const postList: AttributesType[] = data.map(({ content }) => getAttributesOfContent(content));
    res.status(200).send(postList);
  } else {
    res.status(400);
  }
}
