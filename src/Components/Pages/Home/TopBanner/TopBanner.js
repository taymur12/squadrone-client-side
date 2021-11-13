import { Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css'

const TopBanner = () => {
    
    return (
        <div>
           <Box className='main-top' >
                <h2  className='title-top' >We Can Make Your Celebration Unforgetable</h2>
                <Button sx={{border:'1px solid white', padding:'5px 20px', color:'white', display:'block', margin:'0 auto'}}><Link style={{textDecoration:'none', color:'white'}} to="/products">Explore Products</Link></Button>
           </Box>
        </div>
    );
};

export default TopBanner;