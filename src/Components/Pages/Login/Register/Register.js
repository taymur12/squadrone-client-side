
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const registerHandle = e =>{
        e.preventDefault()
    }

    return (
        <Box component="div" sx={{ overflow: 'hidden' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Box className='login-box' sx={{ padding: '40px 20px', width: '90%' }}>
                    <form onClick={registerHandle}>
                        <Typography variant="h5">
                        Register
                        </Typography>
                        <TextField name='email'  sx={{ width: '80%', margin: '10px 0px' }} label="Name" type="search" />
                        <br />
                        <TextField sx={{ width: '80%', margin: '10px 0px' }}  label="Password" type="password" autoComplete="current-password" />
                        <br />
                        <Button value='submit' variant="contained">Register</Button>
                        <Typography sx={{marginTop:'13px', color:'gray'}} variant="p" component="div">
                            Already Register? <Link to="/login">Login</Link>
                        </Typography>
                    </form>
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