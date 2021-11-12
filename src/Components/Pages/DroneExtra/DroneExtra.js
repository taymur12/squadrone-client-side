import { Box, Grid, Typography } from '@mui/material';
import extraImg from '../../../DroneImg/extra/mobile-preview-640x427.png'
import React from 'react';

const DroneExtra = () => {
    return (
        <Box sx={{ backgroundColor: 'black', padding: '40px' }}>
            <Grid sx={{ width: '90%', margin: '0 auto' }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ transform: 'rotate(20deg)', width:'100%', paddingTop:'90px' }} src={extraImg} alt="Girl in a jacket"  />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ color: 'white', margin: '40px'}} variant='h3' component="div">
                        We Offer Innovative Video
                        Streaming & Content Delivery
                    </Typography>
                    <Typography sx={{ color: 'white' }} variant='p' component="div">
                        Completely synergize resource taxing relationships via premier
                        niche markets professionally.
                    </Typography>
                    <Box>
                    <Grid sx={{ width: '100%', margin: '0 auto', paddingTop:'30px'}} container spacing={4}>
                        <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white' }} variant='h6' component="div">
                        FLIGHT TIME
                    </Typography>
                        <Typography sx={{ color: 'white' }} variant='p' component="div">
                        Capital without superior collaboration and idea sharing with all pontificate installed base portals after maintain products box.
                    </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white' }} variant='h6' component="div">
                        BATTERY HUB
                    </Typography>
                        <Typography sx={{ color: 'white' }} variant='p' component="div">
                        Objectively innovate empowered battery products whereas parallel platforms holisticly predominate extensible.
                    </Typography>
                        </Grid>
                        </Grid>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default DroneExtra;