import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {AppBar} from "./styles/mainLayout.style";

const Header = ({setOpen,open}) => {
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: '36px',
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Hashverse Test Project
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
