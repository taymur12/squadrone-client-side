import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeProduct = ({allProduct}) => {
    const {_id ,title, price, imgs, description, rating} = allProduct
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={imgs}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 130) + '...'}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link to={`details/${_id}`}><Button size="small" color="primary">
            Purchase
        </Button></Link>
        
      </CardActions>
    </Card>
        </div>
    );
};

export default HomeProduct;