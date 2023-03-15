import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Link } from '@mui/material';

export default function ProjectsCard({ project }) {
    return (
        <>
            <Box >
                <Typography gutterBottom variant="h6" component="div" className='projectDetails'>
                    {project['name']}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='projectDetails'>
                    {project['contractor']}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='projectDetails'>
                    {project['address']}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='projectDetails'>
                    ID: {project['id']}
                </Typography>
            </Box>
            <Box sx={{ marginTop: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button variant="contained" sx={{ display: 'block', bgcolor: 'lightgray' }}>View Certified Payroll Info</Button>
                    <Link href="#" sx={{ display: 'block', mt: 2, color: 'lightgray' }}>Last submitted Payroll Certified : mm/dd/yyyy</Link>
                </Box>
            </Box>
        </>
    );
}