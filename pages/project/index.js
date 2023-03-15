import React from 'react';
import {
    Grid,
    Button,
    Container,
    Typography,
    Box,
    Tabs,
    Tab,
    Toolbar
} from '@mui/material';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import projects from '../../data/projects.json';
import ProjectCard from '../../components/project/ProjectCard';

const Projects = () => {
    const [value, setValue] = React.useState('contracts');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <Container sx={{ marginTop: '20px' }}>
                <Toolbar disableGutters>
                    <Box className='buildWrapper'>
                        <AccountBalanceIcon className='buildIcon' sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'gray' }} />
                    </Box>
                    <Typography variant="h6" noWrap component="a" sx={{
                        mr: 2, display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace', fontWeight: 700, color: 'black',
                        textDecoration: 'none', fontSize: '30px'
                    }}>
                        ABC Public Body Page
                    </Typography>
                </Toolbar>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="contracts" label={<span className="tabLabel">Contracts</span>} />
                        <Tab value="staff" label={<span className="tabLabel">Staff</span>} />
                        <Tab value="profile" label={<span className="tabLabel">Profile</span>} />
                    </Tabs>
                </Box>
                {value === 'contracts' &&
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <p>View/add contracts and see certified payroll for your projects here</p>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'normal', md: 'right' }, flexGrow: 1, alignItems: 'center' }}>
                                <Button variant="contained" startIcon={<AddIcon sx={{ color: 'black' }} />} sx={{ bgcolor: 'lightgray' }}>Add Contract</Button>
                                <Button variant="contained" startIcon={<LocationSearchingIcon sx={{ color: 'black' }} />} sx={{ bgcolor: 'lightgray', ml: '12px' }}>Find Contract</Button>
                            </Grid>
                        </Grid>
                    </Box>
                }
                {value === 'contracts' &&
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <Grid key={index} marginTop={2} sx={{ minWidth: '29vw', border: 1, borderRadius: 1, borderColor: 'lightgray', 'p': 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <ProjectCard project={project} key={index} />
                                    </Grid>
                                ))
                            ) : (
                                <p>
                                    No saved projects yet!!
                                </p>
                            )
                        }
                    </Box>
                }
            </Container>
            <Footer />
        </>
    );
};

export default Projects;
