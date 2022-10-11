import { AttributesType } from '@common/frontMatter';
import { getFileList } from '@common/fs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { title } from 'process';
import { useEffect } from 'react';

type PostListProps = {
  postList: AttributesType[];
};

const PostList = ({ postList }: PostListProps) => {
  return (
    <div>
      {postList.map((e, idx) => {
        console.log(idx, e);
        return (
          <Link href={`/${e.slug}`}>
            <a>
              <div key={idx}>
                <div>{`제목 : ${e.title}`}</div>
                <div>`description ${e.description}`</div>
                {e.tags.map((tag) => (
                  <span> {tag} </span>
                ))}
                <div>{`date : ${e.date}`}</div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default PostList;
