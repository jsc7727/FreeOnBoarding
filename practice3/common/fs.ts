import { AttributesType } from './frontMatter';
import { getAttributesOfContent } from 'common/frontMatter';
import fs from 'fs';
import path from 'path';

export type FileType = {
  filename: string;
  content: string;
};

export const getPostFilenameList = () => {
  return fs.readdirSync(path.resolve('./__posts'));
};

export const getFileList = (): FileType[] => {
  try {
    return getPostFilenameList().map((filename) => ({
      filename,
      content: fs.readFileSync(`./__posts/${filename}`, 'utf-8'),
    }));
  } catch (error) {
    return [];
  }
};

export const getFile = (filename: string): FileType => {
  try {
    return { filename, content: fs.readFileSync(`./__posts/${filename}.md`, 'utf-8') };
  } catch (error) {
    return { filename, content: '' };
  }
};

export const getFileOfSlug = (slug: string): FileType & { attributes?: AttributesType } => {
  try {
    const res = getFileList()
      .map((e) => ({ ...e, attributes: getAttributesOfContent(e.content) }))
      .filter((e) => e.attributes.slug === slug);
    if (res.length === 0) throw 'res zero';
    const { filename, content, attributes } = res[0];
    return { filename, content, attributes };
  } catch (error) {
    return { filename: slug, content: '' };
  }
};
