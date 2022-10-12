import { AttributesType } from 'common/frontMatter';
import { getFileList } from 'common/fs';
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
        return (
          <Link key={idx} href={`/${e.slug}`}>
            <a>
              <div>
                <div>{`제목 : ${e.title}`}</div>
                <div>`description ${e.description}`</div>
                {e.tags.map((tag) => (
                  <span key={tag}> {tag} </span>
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
