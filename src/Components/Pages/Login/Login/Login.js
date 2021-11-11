import { Box, Grid, TextField, Button, Typography, Alert } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../../DroneImg/extra/mini_3099609.jpg'
import useAuth from '../../../../hooks/useAuth';
// import FirebaseAuth from '../../../../hooks/useFirebase'
import './Login.css'

const Login = () => {
    const {SignInWithGoogle, loginProcess, userEmail, userPassword, error} = useAuth()
    return (
        <Box component="div" sx={{ overflow: 'hidden' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
            <img style={{width:'90%', paddingTop:'20px'}} src={loginImg} alt="" />
            </Grid>
            <Grid item xs={12} md={5}>
            <Box className='login-box' sx={{padding:'40px 20px', width:'90%'}}>
                    <form onSubmit={loginProcess}>
                    <Typography variant="h5">
                        Login
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField onBlur={userEmail} sx={{width:'80%', margin:'10px 0px'}}  label="Name" type="email" />
                    <br />
                    <TextField onBlur={userPassword} sx={{width:'80%', margin:'10px 0px'}}  label="Password" type="password" autoComplete="current-password" />
                    <br />
                    <Button type='submit' variant="contained">Login</Button>
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


