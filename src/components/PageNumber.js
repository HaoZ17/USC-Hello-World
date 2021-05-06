import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    '&': {
      margin: theme.spacing(1),
      position:'fixed',
      display:'flex',
      flexDirection:'row',
      right:'45%',
      // left:'50%',
      bottom:'3 %',
      zIndex: 1,
      justifycontent: 'center',
      alignitems: 'center',
      
    },
  },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="back" >
        <ArrowBackIosTwoToneIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Fab variant="extended" >
        {/* <NavigationIcon className={classes.extendedIcon} /> */}
        1/500
      </Fab>
      <Fab color = "primary" aria-label="next">
        <ArrowForwardIosTwoToneIcon />
      </Fab>
    </div>
  );
}
