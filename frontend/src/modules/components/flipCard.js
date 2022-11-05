// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useRef } from 'react';
import Box from '@mui/material/Box';

// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Typography } from '@mui/material';

const backgroundImage =
<FontAwesomeIcon icon="fa-solid fa-hand-point-down" />
;

function FlipperSample() {
  const ref = useRef();
  
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      // ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '280px', height: '300px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: '#41669d'}} >
      <Box  
         sx={{
          mt: 10,
          mb: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        // src="static/hand.png"
      >
      <Typography variant='h1' color='white' >
      $10
      </Typography>
        <Typography variant='h7'
        sx={{alignContent:''}}
        color='white'>
        could pay school fee for a month
        </Typography>
         <br />
      </Box>
    </FrontSide>
    <BackSide 
    style={{ backgroundColor: '#175852'}}
  
    >
      <img
      style={{height:100}}
      src={backgroundImage}
      />
      <button onClick={() => { ref.current.toggle(); }}> Donate Now</button>
    
    </BackSide>
  </Flippy>
  )

}
export default FlipperSample



