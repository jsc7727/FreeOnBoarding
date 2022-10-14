import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import useGetData from 'hooks/SWR/useGetData';
import Link from 'next/link';
import useSWR from 'swr';

export type CategoryType = { [category: string]: number };

const Categories = ({ categories }: { categories: CategoryType }) => {
  return (
    <div>
      <Grid container justifyItems="center" spacing={3}>
        {Object.entries(categories).map(([category, count]) => {
          console.log(category);
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
    </div>
  );
};
export default Categories;
