import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { AttributesType } from 'common/frontMatter';
import axios from 'axios';
import PostList from '@components/PostList';

type CategoryPageProps = {
  category: string;
  postList: AttributesType[];
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category, postList }) => {
  return <PostList category={category} postList={postList}></PostList>;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log(context);
  const paths = getAllFiles().map(({ category }) => {
    return { params: { category } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category;
  if (typeof category === 'string') {
    try {
      const { data: postList } = await axios.get(`/api/getCategory?category=${category}`);
      return {
        props: {
          category,
          postList,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
  return {
    props: {
      category,
      postList: [],
    },
  };
};
export default CategoryPage;
