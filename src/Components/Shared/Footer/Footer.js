import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../DroneImg/icon/logo-black-footer.png'
const Footer = () => {
    return (
        <Box sx={{padding:'50px', borderTop:'1px solid lightgray'}}>
            <Grid sx={{width:'90%', margin:'0 auto'}} container spacing={4}>
                <Grid item xs={12} md={4}>
                <img  src={footerImg} alt="Girl in a jacket" />
                    <Typography sx={{color:'gray'}} variant='p' component="div">
                    Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate testing.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography  variant='h6' component="div">
                CATEGORIES
                    </Typography>
                <Typography  variant='p' component="div">
                <Link style={{textDecoration:'none', color:'black', marginTop:'10px'}} to="/home">Home</Link>
                    </Typography>
                <Typography  variant='p' component="div">
                <Link style={{textDecoration:'none', color:'black', marginTop:'10px'}} to="/products">Products</Link>
                    </Typography>
                <Typography  variant='p' component="div">
                <Link style={{textDecoration:'none', color:'black', marginTop:'10px'}} to="/news">News</Link>
                    </Typography>
                <Typography  variant='p' component="div">
                <Link style={{textDecoration:'none', color:'black', marginTop:'10px'}} to="/contact">Contact</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography  variant='h6' component="div">
                SUBSCRIBE NOW
                    </Typography>
                <Typography  variant='p' component="div">
                For More Update
                    </Typography>
                </Grid>
            </Grid>
            <Typography  style={{textAlign:'center', marginTop:'10px'}} variant='p' component="div">
             CopyRigth @2021
                    </Typography>
        </Box>
    );
};

export default Footer;