import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FileType, getAllFiles } from 'common/fs';
import { AttributesType, getAttributesOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { SWRConfig } from 'swr';
import { getPost } from 'pages/api/getPost';

type PostPageProps = {
  slug: string;
  category: string;
  fallback: {
    [slug: string]: FileType & {
      attributes: AttributesType;
    };
  };
};

const PostPage: NextPage<PostPageProps> = ({ slug, category, fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Content slug={slug} category={category}></Content>
    </SWRConfig>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles().map(({ category, content }) => {
    return { params: { category, slug: getAttributesOfContent(content)?.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const category = params?.category;
  if (typeof slug === 'string' && typeof category === 'string') {
    return {
      props: {
        slug,
        category,
        fallback: {
          '/api/getPost': await getPost(category, slug),
        },
      },
      revalidate: 600,
    };
  }
  return {
    props: {
      slug,
      category,
      fallback: {
        '/api/getPost': {},
      },
    },
    revalidate: 600,
  };
};
export default PostPage;
