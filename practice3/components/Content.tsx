import { AttributesType } from '@common/frontMatter';
import { FileType } from '@common/fs';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export type PostType = FileType & {
  attributes: AttributesType;
};

const Content = () => {
  const { category, slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['post', category, slug]);
  return <Box pl={5} pr={5} className="post__content" dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}></Box>;
};

export default Content;
