import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import headerImg from '../../../DroneImg/icon/logo-black.png'
import { Link } from 'react-router-dom';

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
    return (
        <div  className={classes.root}>
        <div>
          <AppBar style={{backgroundColor:'white'}}>
            <Toolbar>
              <Typography className={classes.title}>
                <img style={{width:'150px'}}   src={headerImg} alt="" />
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

                    <MenuItem onClick={() => setAnchor(null)}> 
                      <Button style={{color:'black'}}> Home </Button>
                    </MenuItem>
                    <MenuItem onClick={() => setAnchor(null)}> 
                      <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/login">Login</Link> </Button>
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <div style={{ marginRight: "5rem" }}>
                  <Button style={{color:'black'}}> Home </Button>
                  <Button style={{color:'black'}}> Products </Button>
                  <Button style={{color:'black'}}> <Link style={{textDecoration:'none', color:'black'}} to="/login">Login</Link> </Button>
                  
                  
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