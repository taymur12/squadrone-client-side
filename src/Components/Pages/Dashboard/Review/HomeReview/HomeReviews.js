import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';

const HomeReviews = ({allreview}) => {
    const {rating, message, name} = allreview
    return (
        <div>
            <Card sx={{ maxWidth: 345, height:'170px', backgroundColor:'BurlyWood' }}>
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
          Rating: {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </div>
    );
};

export default HomeReviews;