import * as React from 'react';
import { CardActionArea,CardMedia,CardContent } from '@mui/material';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import flipCard from '../components/flipCard';  

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 1,
  py:1,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 20, mb: 20, display: "flex", position: "relative" }}>
        <Box
          component="img"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />

        <Grid
          container
          spacing={1}
        >
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 1 st Card */}

              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    ZAKAT
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Guard your wealth by paying Zakat, cure your sick by giving
                    charity, and protect yourselves by supplication. (Hadith)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 2nd Card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    Sadaqah
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Salah is evidence (of Iman) and fasting is a shield (from
                    sins) and Sadaqah wipes out sins as water extinguishes the
                    fire. (Hadith)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 3rd Card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    Qurbani
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    It is the Sunnah of your father Ibrahim (AS). For every hair
                    of the Qurbani you receive a reward from Allah. (Hadith)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 4th Card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    Education
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Decades of war and political crisis have affected many parts
                    of life, such as the education in Afghanistan.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 5th Card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    Sponsor A Child
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Afghanistan is among the 11 most dangerous nations in the
                    world for children. Help us to protect them.{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* 6th Card */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/images/muftimenk.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="gray"
                  >
                    ZAKAT
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Guard your wealth by paying Zakat, cure your sick by giving
                    charity, and protect yourselves by supplication. (Hadith)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
