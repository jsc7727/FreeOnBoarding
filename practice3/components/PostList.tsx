import { Box, Chip, Stack } from '@mui/material';
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
          <Box key={idx} mx={12} mt={3} mb={3} sx={{ borderColor: 'primary.main' }}>
            <Link href={`/${category}/${e.slug}`}>
              <a>
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
              </a>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
export default PostList;
