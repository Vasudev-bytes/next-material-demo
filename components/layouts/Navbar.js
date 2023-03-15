import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button, Link } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/navigation';

const Navbar = ({ isLoggedIn }) => {
    const router = useRouter();
    const handleSignOut = () => {
        router.push('/');
    }
    return (
        <AppBar color="default" position="static">
            <Container>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'black' }} />
                    <Typography variant="h6" noWrap component="a" href="/" sx={{
                        mr: 2, display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'black',
                        textDecoration: 'none',
                    }}>
                        LOGO
                    </Typography>
                    <Box className='header-right' sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Link href="#" sx={{ marginRight: '15px' }}>Español</Link>
                        {isLoggedIn === true && <Button onClick={handleSignOut} variant="contained" key="signout" sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'lightgray', textTransform: 'capitalize' }}>
                            Sign Out
                        </Button>}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;