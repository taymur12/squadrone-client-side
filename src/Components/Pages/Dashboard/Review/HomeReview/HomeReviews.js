import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea, Avatar } from '@mui/material';

const HomeReviews = ({allreview}) => {
    const {rating, message, name} = allreview
    return (
        <div>
            <Card sx={{ maxWidth: 345, height:'170px', backgroundColor:'LightSkyBlue' }}>
      <CardActionArea>
         <Avatar sx={{padding:'10px', color:'black', margin:'0 auto'}} src="/broken-image.jpg" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
          <Typography sx={{marginTop:'10px', color:'DarkGoldenRod'}} gutterBottom variant="p" component="div">
          <Stack direction="row" spacing={2}>
          <Rating name="half-rating-read" defaultValue={rating} precision={rating} readOnly />
      </Stack>
          Rating: {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </div>
    );
};

export default HomeReviews;


