import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FileType, getFile, getFileList } from 'common/fs';
import { AttributesType, getAttributesOfContent, getFrontMatterOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { markdownParser } from 'common/remark';

type PostPageProps = FileType & {
  attributes: AttributesType;
};

const PostPage: NextPage<PostPageProps> = ({ filename, attributes, content }) => {
  return (
    <div className="post">
      <Content content={content}></Content>
    </div>
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
  const paramId = context.params?.id;
  if (typeof paramId === 'string') {
    const file = getFile(paramId);
    const { attributes, body } = getFrontMatterOfContent(file.content);
    const content = await markdownParser(body);
    return { props: { filename: file.filename, attributes, content } };
  }
  return { props: {} };
};

export default PostPage;
