import React from 'react';

import {IconButton,Paper} from '@mui/material';


// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
// import { icons } from 'react-icons/lib';

// import Image from '/images/img2.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage:    "url('images/img2.jpg') ",
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}
