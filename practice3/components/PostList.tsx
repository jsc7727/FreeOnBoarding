import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';

type PostListProps = {
  category: string;
  postList: AttributesType[];
};

const PostList = ({ category, postList }: PostListProps) => {
  if (postList === undefined) {
    return <div>undefined postList</div>;
  }
  return (
    <div>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/${category}/${e.slug}`}>
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
