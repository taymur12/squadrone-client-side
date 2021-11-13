import { Box } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://fierce-hollows-37330.herokuapp.com/addnewproduct', data)
        .then(res => {
            
            alert('This Product has been Added Successfully!')
            reset()
        })
    };
    return (
        <div>
            <h2 style={{ marginTop: '10px' }}>Add New Product</h2>
            <h2 style={{ marginTop: '40px', textAlign: 'center' }}>Add new Product</h2>
            <Box sx={{ width: '70%', margin: '0 auto' }}>
                <form style={{paddingBottom:'50px'}} onSubmit={handleSubmit(onSubmit)}>
                <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} {...register("title", { required: true })} placeholder='Title' />
                <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} {...register("description", { required: true })} placeholder='Description' />
                <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} type="number" {...register("price")} placeholder='Price' />
                <input style={{width:'60%', padding:'10px', display:'block', margin:'10px'}} {...register("imgs", { required: true })} placeholder='Image Url' />
                    <input style={{marginLeft:'10px'}} type="submit" />
                </form>
            </Box>
        </div>
    );
};

export default AddProduct;