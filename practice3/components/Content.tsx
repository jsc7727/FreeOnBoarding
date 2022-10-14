import { Box } from '@mui/material';
import useGetPost from 'hooks/SWR/useGetPost';

type ContentProps = {
  slug: string;
  category: string;
};

const Content = ({ category, slug }: ContentProps) => {
  const { data } = useGetPost({ category, slug });
  // if (data === undefined) {
  //   return <div>undefined</div>;
  // }
  return <Box pl={5} pr={5} className="post__content" dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}></Box>;
};

export default Content;
