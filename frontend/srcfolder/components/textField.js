import * as React from 'react';
import {Box,Grid} from '@mui/material';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Grid container >
      
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid item xs={12}>
      <Box >

      <TextField id="nameField" label="Name" variant="outlined" />
      </Box>
      </Grid>
      <Grid item xs={12}>
      <Box>

      <TextField id="emailField" label="Email" variant="outlined" />
      </Box>
      </Grid>
    </Box>
    </Grid>
  );
}
