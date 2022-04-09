import { Navbar, Container } from 'react-bootstrap';
import './css/Navigationbar.css';
import logo from './assets/blockcomet_logo_no_name.png';
import { Link } from "react-router-dom";
import useToken from './useToken'
import { makeGetReq } from './helpers'
import { BsArrowLeftShort } from "react-icons/bs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react'
import * as React from 'react';
import { Button as MUIButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function BasicMenu({ username, onLogout }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="user-dropdown">
            <MUIButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: 'black', }}
            >
                <AccountCircleIcon />
                {username}
            </MUIButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem> <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard </Link></MenuItem>
                <MenuItem onClick={onLogout}> <Link to="/" style={{ textDecoration: 'none' }}>Logout </Link></MenuItem>
            </Menu>
        </div>
    );
}

function Navigationbar(props) {
    const { token } = useToken()
    const [username, setUsername] = useState('')
    useEffect(async () => {
        if (token) {
            const userData = await makeGetReq('me', token)
            console.log("Navigation makeGetReq", userData)
            if (userData.status == 200) {
                setUsername(userData.data)
            }
        }
    }, [])
    const onLogout = () => {
        localStorage.removeItem('token')
        makeGetReq('logout', token)
    }
    return (
        <Navbar bg="light" expand="lg">
            {!token && <Link to="/"><BsArrowLeftShort id="navbar-back" /></Link>}
            <Container id="bc-navbar">
                <Link id="logo-link" to="/">
                    <img src={logo} className="logo-navbar" alt="logo" data-testid="logo" />
                    <Navbar.Brand id="text-navbar">BlockComet</Navbar.Brand>
                </Link>
            </Container>

            {token && <BasicMenu username={username} onLogout={onLogout} />}
        </Navbar>
    )
}

export default Navigationbar;