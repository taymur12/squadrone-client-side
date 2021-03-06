
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([])
    const [added, setadded] = useState([])
    useEffect(() => {
        fetch('https://fierce-hollows-37330.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        fetch('https://fierce-hollows-37330.herokuapp.com/addnewproducts')
            .then(res => res.json())
            .then(data => setadded(data))
    },[])

    return (
        <div>
            <h2>This is rpoducts</h2>
            <h1>New Exclusive Drone </h1>
            <div>

            <Grid style={{width:'90%', margin:'40px auto'}} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        products.map(product =>  <Grid item xs={12} sm={4} md={4}>
                             <Product key={product.title} allProduct={product}></Product>
                          </Grid>) 
                    }
                   
                    {
                        added.map(product =>  <Grid item xs={12} sm={4} md={4}>
                             <Product key={product.title} allProduct={product}></Product>
                          </Grid>) 
                    }
                   
                    

            </Grid>
        </div>
        </div>
    );
};

export default Products;