import { AttributesType } from '@common/frontMatter';
import { FileType } from '@common/fs';
import axios from 'axios';
import useSWR from 'swr';

type useGetPostProps = {
  slug: string;
  category: string;
};
type PostType = FileType & {
  attributes: AttributesType;
};

const useGetPost = ({ slug, category }: useGetPostProps) => {
  const { data, isValidating, error } = useSWR<PostType, Error>(
    '/api/getPost',
    async () => {
      const { data } = await axios.get(`/api/getPost?category=${category}&slug=${slug}`);
      return data;
    },
    {
      suspense: true,
    },
  );
  return { data, isValidating, error };
};
export default useGetPost;
