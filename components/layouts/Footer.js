import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <AppBar color="default" position="static" sx={{ position: 'fixed', bottom: '0px', width: '100%', zIndex: '9' }}>
            <Container>
                <Toolbar disableGutters>
                    <Box className='header-right' sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Typography sx={{ color: 'lightgray' }}>
                            All Rights Resered
                        </Typography>
                        <Typography sx={{ mr: '10px', ml: '10px', color: 'lightgray' }}>|</Typography>
                        <Link href="#" sx={{ color: 'lightgray' }}>Terms and Conditions</Link>
                        <Typography sx={{ mr: '10px', ml: '10px', color: 'lightgray' }}>|</Typography>
                        <Link href="#" sx={{ color: 'lightgray' }}>Privacy Policy</Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;