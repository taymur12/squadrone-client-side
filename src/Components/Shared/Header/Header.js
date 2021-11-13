import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, Menu, MenuItem, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import headerImg from '../../../DroneImg/icon/logo-black.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
      
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));

const Header = () => {
    const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null)
}

  const {user, logout} = useAuth()
    return (
        <div  className={classes.root}>
        <div>
          <AppBar style={{backgroundColor:'white'}}>
            <Toolbar>
              <Typography className={classes.title}>
               <Link to="/home"> <img style={{width:'150px'}}   src={headerImg} alt="" /></Link>
              </Typography>
              {isMobile ? (
                <div>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu id="menu-appbar" anchorEl={anchor} anchorOrigin={{ vertical: "top",
                      horizontal: "right"}} KeepMounted  transformOrigin={{ vertical: "top", horizontal: "right" }} open={open}>
                        
                    {user.email && <MenuItem onClick={() => setAnchor(null)}> 
                    <IconButton aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup="true" onClick={handleMenu} color="inherit"> <Avatar src={user.photoURL}></Avatar></IconButton>
                    </MenuItem>}
                    <MenuItem onClick={() => setAnchor(null)}> 
                      <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link></Button>
                    </MenuItem>
                    <MenuItem onClick={() => setAnchor(null)}> 
                    <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/products">Products</Link></Button>
                    </MenuItem>
                    <MenuItem > 
                    {user.email && <Button><Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Dashboard</Link></Button>}
                    </MenuItem>
                    <MenuItem onClick={() => setAnchor(null)}> 
                    {user.email ? <Button onClick={logout} style={{color:'black'}}> Logout </Button> : <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/login">Login</Link> </Button>}
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <div style={{ marginRight: "5rem" }}>
                  <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link></Button>
                  <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/products">Products</Link></Button>
                 
                  
                  {/* {user.email ? <Button onClick={logout} style={{color:'black'}}> Logout </Button> : <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/login">Login</Link> </Button>} */}
                  

                    {user.email?  <span> <IconButton aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup="true" onClick={handleMenu} color="inherit"> <Avatar src={user.photoURL}></Avatar></IconButton> <Menu id="menu-appber"
                           anchorEl={anchor}
                           anchorOrigin={{
                               vertical:'top',
                               horizontal:'right',
                           }}
                           keepMounted
                           transformOrigin={{
                            vertical:'top',
                            horizontal:'right',
                           }}
                           open={open}
                           onClick={handleClose}
                           >
                               {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                               <MenuItem onClick={handleClose}>My Account</MenuItem> */}
                               <MenuItem onClick={handleClose}>{user.email && <span><Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Dashboard</Link></span>}</MenuItem>
                               <MenuItem onClick={handleClose}>{user.email && <span onClick={logout}>Logout</span>}</MenuItem>
                           </Menu></span> : <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/login">Login</Link> </Button>}
                  
                </div>
              )}
            </Toolbar>
          </AppBar>
          
        </div>
      {/* </HideOnScroll> */}
    </div>
    );
};

export default Header;