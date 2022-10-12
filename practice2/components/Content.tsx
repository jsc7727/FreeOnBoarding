import { markdownParser } from '@common/remark';
import { useEffect, useState } from 'react';

type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  return (
    <>
      <div className="post__content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default Content;
