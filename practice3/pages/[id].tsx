import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FileType, getFile, getFileList } from 'common/fs';
import { AttributesType, getAttributesOfContent, getFrontMatterOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { markdownParser } from 'common/remark';
import { SWRConfig } from 'swr';

type PostPageProps = FileType & {
  attributes: AttributesType;
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
  const paramId = context.params?.id;
  if (typeof paramId === 'string') {
    const file = getFile(paramId);
    const { attributes, body } = getFrontMatterOfContent(file.content);
    const content = await markdownParser(body);
    return {
      props: {
        fallback: {
          '/api/content': { filename: file.filename, attributes, content },
        },
      },
    };
  }
  return {
    props: {
      fallback: {
        '/api/content': {},
      },
    },
  };
};

const PostPage: NextPage<PostPageProps> = (props) => {
  return (
    <SWRConfig value={{ fallback: props }}>
      <Content content={props.content}></Content>
    </SWRConfig>
  );
};

export default PostPage;
