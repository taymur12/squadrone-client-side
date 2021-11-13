
import { Box, Grid, TextField, Button, Typography, Alert} from '@mui/material';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import FirebaseAuth from '../../../../hooks/useFirebase';

const Register = () => {
    const { SignInWithGoogle, registerProcess, error } = useAuth();
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleRegSubmit = e => {
        registerProcess( loginData.email , loginData.password, location, history)
        e.preventDefault()
    }
        const handleGoogleReg = () =>{
        SignInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <Box component="div" sx={{ overflow: 'hidden' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box className='login-box' sx={{ padding: '40px 20px', width: '90%' }}>
                        <form onSubmit={handleRegSubmit}>
                            <Typography variant="h5">
                                Register
                            </Typography>
                            {/* {user.email && <Alert severity="success">
                                <AlertTitle>Congratulations!</AlertTitle>
                                Registration Successfully Done — <strong>check it out!</strong>
                            </Alert>} */}
                            {error && <Alert severity="error">{error}</Alert>}
                           
                            <TextField onBlur={handleOnBlur} name='email' sx={{ width: '80%', margin: '10px 0px' }} label="Email" type="email" />
                            <br />
                            <TextField onBlur={handleOnBlur} sx={{ width: '80%', margin: '10px 0px' }} name="password" label="Password" type="password" autoComplete="current-password" />
                            <br />
                            <Button type='submit' variant="contained">Register</Button>
                            <Typography sx={{ marginTop: '13px', color: 'gray' }} variant="p" component="div">
                                Already Register? <Link to="/login">Login</Link>
                            </Typography>
                        </form>
                        <Button sx={{ marginTop: '15px' }} variant="contained" onClick={handleGoogleReg}>Sign In Google</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '90%' }} src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </Grid>
            </Grid>
        </Box>


    );
};

export default Register;