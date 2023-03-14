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
import Navbar from '../../components/Navbar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import projects from '../../data/projects.json';
import Card from '../../components/Card';

const Projects = () => {
    const [value, setValue] = React.useState('contracts');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: '20px' }}>
                <Toolbar disableGutters>
                    <Box className='buildWrapper'>
                        <AccountBalanceIcon className='buildIcon' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'gray' }} />
                    </Box>
                    <Typography variant="h6" noWrap component="a" sx={{
                        mr: 2, display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace', fontWeight: 700, color: 'black',
                        textDecoration: 'none', fontSize: '30px'
                    }}>
                        ABC Public Dody Page
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <p>View/add contracts and see certified payroll for your projects here</p>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                            <Button variant="contained" startIcon={<AddIcon sx={{ color: 'black' }} />} sx={{ bgcolor: 'lightgray' }}>Add Contract</Button>
                            <Button variant="contained" startIcon={<LocationSearchingIcon sx={{ color: 'black' }} />} sx={{ bgcolor: 'lightgray' }}>Find Contract</Button>
                        </Box>
                    </Box>
                }
                {value === 'contracts' &&
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <Grid key={index} marginTop={2} sx={{ minWidth: '29vw', border: 1, borderRadius: 1, borderColor: 'lightgray', 'p': 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card project={project} key={index} />
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
        </>
    );
};

export default Projects;
