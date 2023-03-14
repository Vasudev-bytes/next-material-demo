import React from 'react';
import {
    Checkbox,
    TextField,
    FormControlLabel,
    Button,
    Container,
    Box,
    Link,
    InputLabel
} from '@mui/material';
import Navbar from '../../components/Navbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SignUp = () => {

    return (
        <>
            <Navbar />
            <Container>
                <h1><strong>Hello! Welcome.</strong></h1>
                <p>Register below by entering your data</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                        <InputLabel className='inputLabel' for="firstName" sx={{ marginLeft: 1 }}>Name</InputLabel>
                        <Box sx={{ display: 'flex' }}>
                            <TextField
                                id="filled-firstname"
                                placeholder="First Name*"
                                variant="filled"
                            />
                            <TextField
                                id="filled-lastname"
                                placeholder="Last Name*"
                                variant="filled"
                            />
                        </Box>

                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                            <InputLabel className='inputLabel' for="lastName" sx={{ marginLeft: 1 }}>Email Address</InputLabel>
                            <TextField
                                id="filled-email"
                                placeholder="johndoe@gmail.com*"
                                type="email"
                                variant="filled"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                            <InputLabel className='inputLabel' for="fein" sx={{ marginLeft: 1 }}>FEIN</InputLabel>
                            <TextField
                                id="outlined-fein"
                                placeholder="1111111111111*"
                                type="number"
                                variant="filled"
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', marginBottom: '20px' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                            <InputLabel className='inputLabel' for="job" sx={{ marginLeft: 1 }}>YOUR JOB TITLE</InputLabel>
                            <TextField
                                id="filled-job-title"
                                placeholder="Eg. Project Manager, etc."
                                type="email"
                                variant="filled"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                            <InputLabel className='inputLabel' for="phone" sx={{ marginLeft: 1 }}>Phone Number</InputLabel>
                            <TextField
                                id="outlined-phone"
                                placeholder="111-111-1111*"
                                type="number"
                                variant="filled"
                            />
                        </Box>
                    </Box>
                    <FormControlLabel className='inputLabel' control={<Checkbox defaultChecked sx={{ marginLeft: 1 }} />} label="I agree to the" /><Link className='inputLabel' href="#">Terms and Conditions</Link>
                    <Button key="signout" sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'lightgray', textTransform: 'capitalize', width: 300, textAlign: 'left' }}>
                        <Box sx={{ float: 'left' }}>Sign Up</Box><Box sx={{ float: 'right' }}><ArrowForwardIosIcon fontSize='inherit' /></Box>
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default SignUp;
