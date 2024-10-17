import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import './Navbar.css';



const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinks = ['Section1', 'Section2', 'Section3', 'Footer'];

    return (
        <AppBar position="sticky" style={{ background: '#333' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Skyline Estates
                </Typography>
                <div className="desktopNav">
                    {navLinks.map((link) => (
                        <Button color="inherit" href={`#${link}`} key={link}>
                            {link}
                        </Button>
                    ))}
                </div>
                <div className="mobileNav">
                    <IconButton color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                        <List>
                            {navLinks.map((link) => (
                                <ListItem button key={link} component="a" href={`#${link}`}>
                                    <ListItemText primary={link} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
