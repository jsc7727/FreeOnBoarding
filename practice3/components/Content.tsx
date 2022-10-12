import { markdownParser } from 'common/remark';
import { Suspense, useEffect, useState } from 'react';
import useSWR from 'swr';

type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  const { data } = useSWR<string, Error>('/api/content', () => content, { suspense: true });
  console.log(data);

  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="post__content" dangerouslySetInnerHTML={{ __html: data ?? '' }}></div>
    </Suspense>
  );
};

export default Content;
