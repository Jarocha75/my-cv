'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const AVATAR_SRC = '/tvoja-fotka.jpg';
const AVATAR_INITIALS = 'JP';
const AVATAR_SIZE = 56;
const DRAWER_WIDTH = 240;
const GITHUB_URL = 'https://github.com/Jarocha75';
const BACKDROP_BLUR = 'blur(10px)';
const TEXT = { mobileMenuTitle: 'Menu' };

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
          backdropFilter: BACKDROP_BLUR,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar
            src={AVATAR_SRC}
            sx={{
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              border: '2px solid',
              borderColor: 'primary.main',
            }}
          >
            {AVATAR_INITIALS}
          </Avatar>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NextLink}
                href={item.href}
                color="inherit"
                sx={{ borderRadius: 2, px: 2 }}
              >
                {item.label}
              </Button>
            ))}

            <Box
              sx={{
                ml: 2,
                borderLeft: '1px solid',
                borderColor: 'divider',
                pl: 2,
              }}
            >
              <IconButton
                color="primary"
                href={GITHUB_URL}
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        PaperProps={{
          sx: { width: DRAWER_WIDTH, backgroundColor: 'background.default' },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
            {TEXT.mobileMenuTitle}
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={NextLink}
                  href={item.href}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
