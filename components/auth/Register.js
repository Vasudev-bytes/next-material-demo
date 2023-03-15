import React from 'react';
import {
    Checkbox,
    TextField,
    FormControlLabel,
    Button,
    Box,
    Link,
    InputLabel,
    Grid
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const router = useRouter();
    const handleSubmit = () => {
        router.push('auth/whoiam');
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <h1>Hello! Welcome.</h1>
                        <p>Register below by entering your data</p>
                    </Grid>
                </Grid>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '96%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container>
                        <Grid item xs={6} md={6} className='textInput'>
                            <InputLabel className='inputLabel' htmlFor="Name" sx={{ ml: 1 }}>Name</InputLabel>
                            <TextField
                                id="filled-firstname"
                                placeholder="First Name*"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={6} md={6} className='textInput' sx={{ mt: '21px' }}>
                            <TextField
                                id="filled-lastname"
                                placeholder="Last Name*"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className='textInput'>
                            <InputLabel className='inputLabel' htmlFor="email" sx={{ ml: 1 }}>Email Address</InputLabel>
                            <TextField
                                id="filled-email"
                                placeholder="johndoe@gmail.com*"
                                type="email"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className='textInput'>
                            <InputLabel className='inputLabel' htmlFor="fein" sx={{ ml: 1 }}>FEIN</InputLabel>
                            <TextField
                                id="outlined-fein"
                                placeholder="1111111111111*"
                                type="number"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className='textInput'>
                            <InputLabel className='inputLabel' htmlFor="job" sx={{ ml: 1 }}>YOUR JOB TITLE</InputLabel>
                            <TextField
                                id="filled-job-title"
                                placeholder="Eg. Project Manager, etc."
                                type="email"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className='textInput'>
                            <InputLabel className='inputLabel' htmlFor="phone" sx={{ ml: 1 }}>Phone Number</InputLabel>
                            <TextField
                                id="outlined-phone"
                                placeholder="111-111-1111*"
                                type="number"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ mt: '40px' }}>
                        <FormControlLabel sx={{ mr: '5px' }} className='inputLabel' control={<Checkbox defaultChecked sx={{ ml: 1 }} />} label="I agree to the" />
                        <Link className='inputLabel' href="#">Terms and Conditions</Link>
                        <Button onClick={handleSubmit} variant="contained" key="signout" sx={{ my: 2, color: 'white', display: 'block', bgcolor: 'lightgray', textTransform: 'capitalize', width: 300, textAlign: 'left' }}>
                            <Box sx={{ float: 'left' }}>Sign Up</Box>
                            <Box sx={{ float: 'right' }}>
                                <ArrowForwardIosIcon fontSize='inherit' />
                            </Box>
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;
