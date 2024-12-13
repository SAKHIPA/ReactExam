import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (


        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to={'/auther'}><Button color="inherit" style={{ color: "white" }}>Auther</Button></Link>
                    <Link to={'/addauther'}><Button color="inherit" style={{ color: "white" }}>AddAuther</Button></Link>

                    <Link to={'/category'}><Button color="inherit" style={{ color: "white" }}>Category</Button></Link>
                    <Link to={'/addcategory'}><Button color="inherit" style={{ color: "white" }}>AddCategory</Button></Link>


                </Toolbar>
            </AppBar>


        </Box>
    );
}

export default NavbarComponent; // Ensure this line exists
