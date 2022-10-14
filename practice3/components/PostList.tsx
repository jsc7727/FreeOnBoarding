import { Box, Card, Chip, css, Stack, Typography } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';

type PostListProps = {
  category: string;
  postList: AttributesType[];
};

const PostList = ({ category, postList }: PostListProps) => {
  return (
    <Box p={10}>
      <Typography variant="h2" component="h2">
        {category}
      </Typography>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/${category}/${e.slug}`}>
            <Box mt={1} mb={2} p={3} sx={{ border: 1, borderRadius: '15px', margin: '10px' }}>
              <Box>{`제목 : ${e.title}`}</Box>
              <Box>`설명 ${e.description}`</Box>
              <Stack direction="row" justifyContent="flex-start" spacing={1}>
                {e.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Stack>
              <Box textAlign={'end'}>{`날짜 : ${e.date}`}</Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
