import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import {Typography,Grid} from '@mui/material';
import BasicTextFields from './textField'
import Subscription from './subscribtion';
import { Stack ,TextField,Button} from '@mui/joy'
import { minHeight } from '@mui/system';
import Home from './bgImage';


export default function BasicCard() {
  const [open, setOpen] = React.useState(false);

  return(
    <>
          <Grid container>
            <Grid item  xs={12}   >
            <Box component="ul" sx={{  p: 0, m: 0 }}>
            <Card
            component="li"
            // sx={{ minWidth: 100, minHeight: 400, flexGrow: 0 }}
          >
            
            <CardCover sx={{ minWidth:1600 , minHeight:350 }}> 
            
               <img src="/images/img2.jpg" alt="image" />
              item1<br></br>

            <Grid item xs={6} bgcolor='red'>item 2</Grid>
            <Grid item xs={6} bgcolor='primary.light'>item3</Grid>
              item1<br></br>
              {/* <Home /> */}
              item1<br></br>
              item1<br></br>
              item1<br></br>
             </CardCover>
              itemooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
              oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
              ddddddddddddddddddddddddd
              sssssssssssssssssss<br></br>

            </Card>

            </Box>

              
              
              
              
              </Grid>
          </Grid>



  </>
  ) 
}
 
        
            <CardContent>
              <Grid item xs>
                <Box bgcolor="primary.light">
                  <Typography variant="h2">
                    News & Updates<br></br>
                    Stay updated with us!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      // setOpen(false);
                    }}
                  >
                    <Stack spacing={2}>
                      <TextField label="Name" autoFocus required />
                      <TextField label="Email" required />
                      <Button type="submit">Submit</Button>
                    </Stack>
                  </form>

                  {/* <BasicTextFields /> */}
                  {/* <Subscription /> */}
                </Box>
              </Grid>
            </CardContent>
 
