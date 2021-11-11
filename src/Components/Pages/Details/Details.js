import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [details, setDetails] = useState({})
    const { productId } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <h2 sx={{ marginTop: '20px' }}>Drone Details</h2>

            <Box sx={{ width: '70%', margin:'0 auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={details.imgs} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h2> {details.title}</h2>
                        <Typography variant="p" component="div">
                            {details.description}
                        </Typography>
                        <Typography sx={{marginTop:'20px'}} variant="h5" component="div">
                            ${details.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Details;