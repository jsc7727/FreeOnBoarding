import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export type CategoryType = { [category: string]: number };

const Categories = ({ categories }: { categories: CategoryType }) => {
  return (
    <Box p={10}>
      <Box pt={5} pb={5} fontSize={30}>
        카테고리
      </Box>
      <Grid container justifyItems="center" spacing={3}>
        {Object.entries(categories).map(([category, count]) => {
          return (
            <Grid key={category} item xs={6} md={3}>
              <Link href={`/${category}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`/images/categoryImage/${category}.jpg`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" align="center">
                        {category}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Categories;
