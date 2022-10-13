import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FileType, getAllFiles } from 'common/fs';
import { AttributesType, getAttributesOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { SWRConfig } from 'swr';
import axios from 'axios';

type PostPageProps = {
  slug: string;
  fallback: {
    [slug: string]: FileType & {
      attributes: AttributesType;
    };
  };
};

const PostPage: NextPage<PostPageProps> = ({ slug, fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Content slug={slug}></Content>
    </SWRConfig>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllFiles().map(({ category, content }) => {
    return { params: { category, slug: getAttributesOfContent(content)?.slug } };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const category = params?.category;
  console.log(slug);
  console.log(category);

  if (typeof slug === 'string' && typeof category === 'string') {
    try {
      const { data } = await axios.get(`/api/getPost?category=${category}&slug=${slug}`);
      return {
        props: {
          slug,
          fallback: {
            '/api/getPost': data,
          },
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
  return {
    props: {
      slug,
      fallback: {
        '/api/getPost': {},
      },
    },
  };
};
export default PostPage;
