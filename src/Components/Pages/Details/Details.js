import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Details = () => {

    const { user } = useAuth()
    const [details, setDetails] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                
                alert('This Product has been ordered successfully!')
                reset()
            })
    };

    return (
        <div>
            <h2 sx={{ marginTop: '20px' }}>Drone Details</h2>

            <Box sx={{ width: '80%', margin: '0 auto' }}>
                <Grid container spacing={2}>
                    <Grid sx={{ borderRight: '1px solid lightgray' }} item xs={12} md={7}>
                        <Typography sx={{ marginTop: '20px' }} variant="h5" component="div">
                            Order Details
                        </Typography>
                        <img src={details.imgs} alt="" />
                        <h2> {details.title}</h2>
                        <Typography variant="p" component="div">
                            {details.description}
                        </Typography>
                        <Typography sx={{ marginTop: '20px' }} variant="h5" component="div">
                            ${details.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ marginTop: '20px' }} variant="h5" component="div">
                            Place Order
                            <Box>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {user?.displayName && <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />}
                                    {user?.email && <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} defaultValue={user.email} {...register("email", { required: true, maxLength: 30 })} placeholder='Email' />}

                                    {details.title && <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} defaultValue={details.title} {...register("title", { required: true })} />}
                                    {details.price && <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} type="number" {...register("price", { required: true, maxLength: 20 })} defaultValue={details.price} />}

                                    <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} type="number" {...register("Phone")} placeholder='Phone' />
                                    <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} {...register("address", { maxLength: 80 })} placeholder='Address' />

                                    <input value="Place Order" type="submit" />
                                </form>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Details;