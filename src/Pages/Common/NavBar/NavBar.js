import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png'
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { MenuItem } from '@mui/material';


function NavBar() {
    const {
        user,
        userSignOut
    } = React.useContext(AuthContext)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ width: { lg: '75%', md: '100%' }, marginLeft: 'auto', marginRight: 'auto', bgcolor: 'transparent', borderRadius: '5px', }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar
                        as={Link}
                        to="/"
                        src={logo}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    />
                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Button sx={{ color: '#416259', display: 'block' }} as={Link} to="/">
                                Home
                            </Button>
                            <Button sx={{ color: '#416259', display: 'block' }} as={Link} to="/contact">
                                Contact Us
                            </Button>
                            <Button sx={{ color: '#416259', display: 'block' }} as={Link} to="/blog">
                                Blog
                            </Button>
                            <Button sx={{ color: '#416259', fontWeight: '700', display: 'block' }} as={Link} to="/suggestions">
                                Suggestions
                            </Button>
                        </Menu>
                    </Box>
                    <Avatar
                        as={Link}
                        to="/"
                        src={logo}
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Button sx={{ color: '#416259', fontWeight: '700' }} as={Link} to="/">
                            Home
                        </Button>
                        <Button sx={{ color: '#416259', fontWeight: '700' }} as={Link} to="/contact">
                            Contact Us
                        </Button>
                        <Button sx={{ color: '#416259', fontWeight: '700' }} as={Link} to="/blog">
                            Blog
                        </Button>
                        <Button sx={{ color: '#416259', fontWeight: '700' }} as={Link} to="/suggestions">
                            Suggestions
                        </Button>
                    </Box>

                    {
                        user?.uid ?
                            <>
                                <Box sx={{ flexGrow: 0, position: 'relative' }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user?.displayName} src={user?.photoURL} />
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem sx={{display: 'flex', flexDirection: 'column'}} onClick={handleCloseUserMenu} >
                                            <Button fullWidth sx={{ display: 'block', color: 'green' }} as={Link} to="/dashboard" >Dashboard</Button>
                                            <Button fullWidth sx={{ display: 'block', color: 'green' }} onClick={userSignOut} >SignOut</Button>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </>
                            :
                            <>
                                <Button color='success' as={Link} to="/signin" >Sign In</Button>
                            </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;