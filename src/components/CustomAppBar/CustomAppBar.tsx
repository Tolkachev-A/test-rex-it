import * as React from 'react';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Container, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import { CustomModal } from '../CustomModal';

import Logo from 'assets/svg/Cracker.svg';
import Seed from 'assets/svg/seed.svg';
import { useAppSelector } from 'hooks';
import { selectBasketData } from 'store/selectors';

const navItems = ['Home', 'About Us', 'Contact Us', 'Contact', 'Checkout'];

export const CustomAppBar = () => {
  const { id } = useAppSelector(selectBasketData);

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const onMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpen = () => setOpen(true);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar variant="dense" disableGutters sx={{ flexDirection: 'column' }}>
          <Box
            sx={{
              height: '60px',
              width: '100%',
              background: 'rgba(51, 51, 51, 1)',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                display: 'flex',

                justifyContent: 'space-between',
              }}
            >
              <img src={Logo} alt="Logo" />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Badge badgeContent={id?.length || 0} color="error">
                  <img src={Seed} alt="Logo" />
                </Badge>
                <Typography
                  component="h2"
                  className="hero-section__title"
                  sx={() => ({
                    color: 'white',
                    fontWeight: 500,
                    pl: 3,
                  })}
                >
                  TOTAL: 143€
                </Typography>
                <Box sx={{ position: 'relative' }}>
                  <Typography
                    onClick={handleOpen}
                    component="h2"
                    className="hero-section__title"
                    sx={() => ({
                      color: 'white',
                      fontWeight: 500,
                      pl: 3,
                      '&:hover': {
                        color: '#FF4200',
                        cursor: 'pointer',
                      },
                    })}
                  >
                    DETAILS
                  </Typography>
                  <CustomModal open={open} callback={handleClose} />
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              background: 'rgba(51, 51, 51, 0.5)',
              boxShadow: 'none',
              width: '100%',
            }}
          >
            <Container maxWidth="md">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
              {openMenu && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    height: { xs: '0', md: '82px' },
                    overflow: 'hidden',
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                >
                  {navItems.map(item => (
                    <Button key={item} sx={{ color: '#fff', padding: '15px 30px' }}>
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Container>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
