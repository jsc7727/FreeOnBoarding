import { AttributesType, getAttributesOfContent, getFrontMatterOfContent } from '@common/frontMatter';
import { getFileList } from '@common/fs';
import PostList from '@components/PostList';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

type HomeProps = {
  postList: AttributesType[];
};

const Home: NextPage<HomeProps> = ({ postList }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList postList={postList}></PostList>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getFileList();
  const postList: AttributesType[] = data.map(({ content }) => getAttributesOfContent(content));
  return {
    props: { postList },
  };
};

export default Home;
