import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FileType, getFileList } from 'common/fs';
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
  const paths = getFileList().map((e) => {
    return { params: { id: getAttributesOfContent(e.content)?.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.id;
  console.log(slug);

  if (typeof slug === 'string') {
    try {
      const { data } = await axios.get(`/api/getPost?slug=${slug}`);
      console.log('server', data);
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
