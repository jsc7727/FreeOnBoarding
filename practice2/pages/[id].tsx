import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { FileType, getFile, getFileList } from '@common/fs';
import { AttributesType, getAttributesOfContent, getFrontMatterOfContent } from '@common/frontMatter';
import Content from '@components/Content';

type PostPageProps = FileType & {
  attributes: AttributesType;
};

const PostPage: NextPage<PostPageProps> = ({ filename, attributes, content }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log('asdf', filename);
  console.log('');
  console.log(attributes);
  console.log('');
  console.log(content);
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
    return { props: { filename: file.filename, attributes, content: body } };
  }
  return { props: {} };
};

export default PostPage;
