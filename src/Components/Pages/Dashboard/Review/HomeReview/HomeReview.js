import { Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeReviews from './HomeReviews';

const HomeReview = () => {
    const [clientReview, setClientReview] = useState([])
    useEffect(()=>{
        fetch('https://fierce-hollows-37330.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setClientReview(data))
    },[])
    return (
        <div>
            <Typography style={{textAlign:'center'}} variant='h5'>
                Review from Clients
            </Typography>
            <Grid style={{width:'90%', margin:'40px auto'}} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        clientReview.map(review =>  <Grid item xs={12} sm={4} md={4}>
                             <HomeReviews key={review.email} allreview={review}></HomeReviews>
                          </Grid>) 
                    }
                    </Grid>
        </div>
    );
};

export default HomeReview;