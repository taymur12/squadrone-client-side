import { Box, Grid, TextField, Button, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImg from '../../../../DroneImg/extra/mini_3099609.jpg'
import useAuth from '../../../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { SignInWithGoogle, loginProcess,  error } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginProcess( loginData.email, loginData.password,  location, history)
        e.preventDefault()
    }
        const handleGoogleLogin = () =>{
        SignInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
   
    return (
        <Box component="div" sx={{ overflow: 'hidden' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '90%', paddingTop: '20px' }} src={loginImg} alt="" />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box className='login-box' sx={{ padding: '40px 20px', width: '90%' }}>
                        <form onSubmit={handleLoginSubmit}>
                            <Typography variant="h5">
                                Login
                            </Typography>
                            {error && <Alert severity="error">{error}</Alert>}
                            <TextField onBlur={handleOnChange} sx={{ width: '80%', margin: '10px 0px' }} name="email" label="Email" type="email" />
                            <br />
                            <TextField onBlur={handleOnChange} sx={{ width: '80%', margin: '10px 0px' }} name="password" label="Password" type="password" autoComplete="current-password" />
                            <br />
                            <Button type='submit' variant="contained">Login</Button>
                            <Typography sx={{ marginTop: '13px', color: 'gray' }} variant="p" component="div">
                                New User? <Link to="/Register">Register</Link>
                            </Typography>
                        </form>
                        <Button sx={{ marginTop: '15px' }} variant="contained" onClick={handleGoogleLogin}>Sign In Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;


