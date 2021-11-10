import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../../DroneImg/extra/mini_3099609.jpg'
import FirebaseAuth from '../../../../hooks/useFirebase'
import './Login.css'

const Login = () => {
    const {SignInWithGoogle} = FirebaseAuth()
    return (
        <Box component="div" sx={{ overflow: 'hidden' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
            <img style={{width:'90%'}} src={loginImg} alt="" />
            </Grid>
            <Grid item xs={12} md={5}>
            <Box className='login-box' sx={{padding:'40px 20px', width:'90%'}}>
                    <form sx={{}}>
                    <Typography variant="h5">
                        Login
                    </Typography>
                    <TextField sx={{width:'80%', margin:'10px 0px'}}  label="Name" type="search" />
                    <br />
                    <TextField sx={{width:'80%', margin:'10px 0px'}}  label="Password" type="password" autoComplete="current-password" />
                    <br />
                    <Button value='submit' variant="contained">Login</Button>
                    <Typography sx={{marginTop:'13px', color:'gray'}} variant="p" component="div">
                        New User? <Link to="/Register">Register</Link>
                    </Typography>
                    </form>
                    <Button  sx={{marginTop:'15px'}} variant="contained" onClick={SignInWithGoogle}>Sign In Google</Button>
                </Box>
            </Grid>
        </Grid>
        </Box>
    );
};

export default Login;


