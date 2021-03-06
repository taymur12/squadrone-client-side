import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fierce-hollows-37330.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'50px'}}>Features Of Drone</h1>

            <Grid style={{width:'90%', margin:'40px auto'}} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        products.slice(0, 6).map(product =>  <Grid item xs={12} sm={4} md={4}>
                             <HomeProduct key={product.title} allProduct={product}></HomeProduct>
                          </Grid>) 
                    }
               
            </Grid>
        </div>
    );
};

export default HomeProducts;