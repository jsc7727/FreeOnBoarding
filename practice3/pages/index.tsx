import { AttributesType } from 'common/frontMatter';
import { FileType } from 'common/fs';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { SWRConfig } from 'swr';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from './api/getCategories';

type HomeProps = {
  categories: CategoryType;
};

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      categories: getCategories(),
    },
  };
};

export default Home;
