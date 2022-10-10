import { markdownParser } from '@common/remark';
import { useEffect, useState } from 'react';

type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  const [text, setText] = useState<string>('');
  useEffect(() => {
    (async () => {
      const res = await markdownParser(content);
      setText(res);
    })();
  }, []);
  return (
    <>
      <div className="post__content" dangerouslySetInnerHTML={{ __html: text }}></div>
    </>
  );
};

export default Content;
