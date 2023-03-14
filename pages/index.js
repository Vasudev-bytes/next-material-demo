import Head from 'next/head'
import { join } from 'path';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { Container, Grid } from '@mui/material';
import projects from '../data/projects.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Demo app with Material UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container>
      </Container>
    </div>
  )
}