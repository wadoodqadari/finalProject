import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  '/images/img3.jpg'
  ;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Make Your Day By Helping Others
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/donation"
        sx={{ minWidth: 200 }}
      >
        Donate
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Feel True Happiness
      </Typography>
    </ProductHeroLayout>
  );
}
