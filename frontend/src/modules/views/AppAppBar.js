import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="AppAppBar"
            sx={{ fontSize: 24 }}
          >
            {'Home'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h5"
              underline="none"
              href="/ourwork"
              sx={rightLink}
            >
              {'Our Work'}
            </Link>
            <Link
              variant="h7"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'About Us'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
