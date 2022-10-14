import useGetPost from 'hooks/SWR/useGetPost';

type ContentProps = {
  slug: string;
};

const Content = ({ slug }: ContentProps) => {
  const { data } = useGetPost({ slug });
  if (data === undefined) {
    return <div>undefined</div>;
  }
  return <div className="post__content" dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}></div>;
};

export default Content;
