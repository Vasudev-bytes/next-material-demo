import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Container, Button } from '@mui/material';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import { useRouter } from 'next/navigation';

export default function WhoAmI() {
    const router = useRouter();
    const handleSubmit = () => {
        router.push('/project');
    }
    return (
        <>
            <Navbar isLoggedIn={false}/>
            <Container sx={{ marginTop: '20px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ bgcolor: 'lightgray', height: '800px' }}></Box>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{mt: { xs:'10px', md: '6vw'}}}>
                                <h1>I am a...</h1>
                                <p>Select your role beolw</p>
                                <Box sx={{mt: '40px'}}>
                                    <Button onClick={handleSubmit} variant="contained" sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'lightgray', textTransform: 'capitalize', width: 300, textAlign: 'left' }}>
                                        <Box sx={{ float: 'left' }}>Contractor</Box>
                                    </Button>
                                    <Button variant="contained" sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'lightgray', textTransform: 'capitalize', width: 300, textAlign: 'left' }}>
                                        <Box sx={{ float: 'left' }}>Public Body</Box>
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </>
    );
}