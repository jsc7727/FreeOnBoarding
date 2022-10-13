import { AttributesType, getAttributesOfContent } from 'common/frontMatter';
import { FileType, getAllFiles, getFileList } from 'common/fs';
import PostList from '@components/PostList';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { SWRConfig } from 'swr';
import Categories from '@components/Categories';

type HomeProps = {
  fallback: {
    [slug: string]: FileType & {
      attributes: AttributesType;
    };
  };
};

const Home: NextPage<HomeProps> = ({ fallback }) => {
  return (
    <div className={styles.container}>
      <div>header</div>
      <SWRConfig value={fallback}>
        <Categories></Categories>
      </SWRConfig>
      <div>main</div>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const files = getAllFiles('./__posts');
  // const postList: AttributesType[] = files.map(({ content }) => getAttributesOfContent(content));
  try {
    const { data } = await axios.get(`/api/getCategories`);
    return {
      props: {
        fallback: {
          '/api/getCategories': data,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      fallback: {
        '/api/getCategories': {},
      },
    },
  };
};

export default Home;
