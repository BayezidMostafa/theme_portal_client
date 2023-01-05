import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { ButtonContainerSideBar, ButtonMainSideBar, LinkContainer } from './DashboardStyles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../../Context/Authentication/Authentication';

const drawerWidth = 240;

function Dashboard(props) {

  const { user } = React.useContext(AuthContext);

  const { data: userData = [], isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('theme-token')}`
        }
      });
      return res.data
    }
  })


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Theme Portal
      </Typography>
      <Divider />
      <List>
        <ButtonContainerSideBar>
          <ButtonMainSideBar as={Link} to='/'>
            Home
          </ButtonMainSideBar>
        </ButtonContainerSideBar>
        {
          userData?.role === 'admin' ?
            <>
              <ButtonContainerSideBar as={Link} to="/dashboard/alldevelopers">
                <ButtonMainSideBar>
                  All Developers
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/allclients">
                <ButtonMainSideBar>
                  All Client
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/reporteditems">
                <ButtonMainSideBar>
                  Reported items
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/verifyrequest">
                <ButtonMainSideBar>
                  Verify Request
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
            </>
            :
            <>

            </>
        }
        {
          userData?.role === 'developer' ?
            <>
              <ButtonContainerSideBar as={Link} to="/dashboard/mytemplates">
                <ButtonMainSideBar>
                  My Templates
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/addtemplate" >
                <ButtonMainSideBar>
                  Add Template
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/requestverification">
                <ButtonMainSideBar>
                  Request Verification
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
            </>
            :
            <></>
        }
        {
          userData?.role === 'client' ?
            <>
              <ButtonContainerSideBar as={Link} to="/dashboard/myorders" >
                <ButtonMainSideBar>
                  My Orders
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/wishlist" >
                <ButtonMainSideBar>
                  Wish List
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
              <ButtonContainerSideBar as={Link} to="/dashboard/mypurchase" >
                <ButtonMainSideBar>
                  My Purchase
                </ButtonMainSideBar>
              </ButtonContainerSideBar>
            </>
            :
            <></>
        }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color='inherit' component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Theme Portal
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <LinkContainer>
              <Link to='/' >Home</Link>
            </LinkContainer>
            {
              userData?.role === 'admin' ?
                <>
                  <LinkContainer>
                    <Link to="/dashboard/alldevelopers" >All Developers</Link>
                    <Link to="/dashboard/allclients">All Clients</Link>
                    <Link to="/dashboard/reporteditems">Reported Items</Link>
                    <Link to="/dashboard/verifyrequest">Verify Request</Link>
                  </LinkContainer>
                </>
                :
                <></>
            }
            {
              userData?.role === 'developer' ?
                <>
                  <LinkContainer>
                    <Link to="/dashboard/mytemplates">My Templates</Link>
                    <Link to="/dashboard/addtemplate">Add Template</Link>
                    <Link to="/dashboard/requestverification">Request Verification</Link>
                  </LinkContainer>
                </> : <></>
            }
            {
              userData?.role === 'client' ?
                <>
                  <LinkContainer>
                    <Link to="/dashboard/myorders" >My Order</Link>
                    <Link to="/dashboard/wishlist" >Wish List</Link>
                    <Link to="/dashboard/mypurchase" >My Purchase</Link>
                  </LinkContainer>
                </>
                :
                <></>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;