import { AttributesType } from '@common/frontMatter';
import { getFileList } from '@common/fs';
import { useRouter } from 'next/router';
import { title } from 'process';
import { useEffect } from 'react';

type PostListProps = {
  postList: AttributesType[];
};

const PostList = ({ postList }: PostListProps) => {
  const router = useRouter();

  const onClickHandler = (slug: string) => {
    router.push(slug);
  };
  return (
    <div>
      {postList.map((e, idx) => {
        console.log(idx, e);
        return (
          <div key={idx} onClick={() => onClickHandler(e.slug)}>
            <div>{`제목 : ${e.title}`}</div>
            <div>`description ${e.description}`</div>
            {e.tags.map((tag) => (
              <span> {tag} </span>
            ))}
            <div>{`date : ${e.date}`}</div>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
