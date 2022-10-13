import axios from 'axios';
import Link from 'next/link';
import useSWR from 'swr';

type CategoryType = { [category: string]: number };

const Categories = () => {
  const { data } = useSWR('/api/getCategories', async () => (await axios.get('/api/getCategories')).data, {
    suspense: true,
  });

  return (
    <div>
      {Object.entries(data as CategoryType).map(([category, count]) => {
        return (
          <Link key={category} href={`/${category}`}>
            <div>
              <div>{category}</div>
              <div>{count}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Categories;
