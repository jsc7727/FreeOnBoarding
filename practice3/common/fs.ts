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
