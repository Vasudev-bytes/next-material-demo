import Head from 'next/head'
import { Container } from '@mui/material';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Register from '../components/auth/Register';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Demo app with Material UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isLoggedIn={false} />
      <Container>
        <Register />
      </Container>
      <Footer />
    </div>
  )
}