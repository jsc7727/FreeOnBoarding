import { Box, Card, Chip, css, Stack } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';

type PostListProps = {
  category: string;
  postList: AttributesType[];
};

const PostList = ({ category, postList }: PostListProps) => {
  console.log(postList);
  return (
    <Box p={10}>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/${category}/${e.slug}`}>
            <a>
              <Card variant="outlined">
                <Box>
                  <Box>{`제목 : ${e.title}`}</Box>
                  <Box>`설명 ${e.description}`</Box>
                  <Stack direction="row" justifyContent="flex-end" spacing={1}>
                    {e.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                  <Box>{`날짜 : ${e.date}`}</Box>
                </Box>
              </Card>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
