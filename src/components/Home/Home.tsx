import * as React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';

import { StringList } from '../../constants/StringList';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          color: '#000',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: 16,
          borderBottom: 1,
          borderBottomColor: '#999',
        }}
      >
        <Hidden only={['xs']}>{StringList.MAIN_SUBTITLE}</Hidden>
      </Box>
      <Card
        raised={true}
        sx={{
          marginTop: 4,
          height: '100%',
          '&:hover': {
            opacity: '0.5',
          },
        }}
      >
        <Link to={StringList.NETWORK_LINK}>
          <Hidden only={['xs']}>
            <CardMedia component='img' image={StringList.NETWORK_IMAGE} height='500' />
          </Hidden>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <CardMedia component='img' image={StringList.NETWORK_IMAGE} height='320' />
          </Hidden>
        </Link>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
