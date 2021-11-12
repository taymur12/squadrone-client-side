import { Grid, Avatar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <h2>all desh </h2>
            <h2 style={{ backgroundColor: 'lightgray', padding: '25px', display: 'block', textAlign: 'center' }}>DashBoard </h2>
            <Grid container spacing={2} >
                <Grid item xs={3} md={2} sx={{ borderRight: '1px solid lightgray' }} >
                    <h3>Menubar</h3>
                   
                    <Typography variant="h6" gutterBottom component="div">
                    <Link style={{textDecoration:'none', color:'CornflowerBlue', margin:'10px'}} to="/">Home</Link>
                    </Typography>
                    <hr/>
                    <Typography variant="h6" gutterBottom component="div">
                    <Link style={{textDecoration:'none', color:'CornflowerBlue', margin:'10px'}} to="/products">Products</Link>
                    </Typography>
                    <hr/>
                    <Typography variant="h6" gutterBottom component="div">
                    <Link style={{textDecoration:'none', color:'CornflowerBlue', margin:'10px'}} to="/pay">Payment</Link>
                    </Typography>
                    <hr/>
                    <Typography variant="h6" gutterBottom component="div">
                    <Link style={{textDecoration:'none', color:'CornflowerBlue', margin:'10px'}} to="/myorder">My Order</Link>
                    </Typography>
                    <hr/>
                    <Typography variant="h6" gutterBottom component="div">
                    <Link style={{textDecoration:'none', color:'CornflowerBlue', margin:'10px'}} to="/review">Review</Link>
                    </Typography>
                    <hr/>
                </Grid>





                <Grid item xs={9} md={10} style={{ padding: '25px', display: 'block', textAlign: 'center' }}>
                   
                    <Avatar
                        alt="Remy Sharp"
                        src={user.photoURL}
                        sx={{ width: 156, height: 156 , display: 'block', margin: '0 auto', paddingBottom:'10px'}}
                    />
                   {user.displayName &&  <Typography variant="h5" gutterBottom component="div">
                        Name: {user.displayName}
                    </Typography>}
                    <Typography variant="h6" gutterBottom component="div">
                        Email: {user.email}
                    </Typography>
                </Grid>

            </Grid>

        </div>
    );
};

export default Dashboard;