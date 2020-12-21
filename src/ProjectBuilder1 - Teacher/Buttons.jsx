import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({  

        root: {
          spacing: value => value **2,
        },
        buttonRed: {
          textTransform: "none",
        },
        buttonOrange: { //this is using hooks
            backgroundColor: "#E5AB2C",
            textTransform: "none",

        },
        buttonBlue: {
            backgroundColor: "#43C0F6",
            textTransform: "none",

        }
}));




export default function ContainedButtons() {
  const classes = useStyles(); //this is using hooks

  return (
    <div className={classes.root}>

      <Button className={classes.buttonOrange} variant="contained" color="secondary" pr={10}  
      style={{"height": "28px", "width": "180px", "fontSize": "14px", "fontWeight": "bold", "borderRadius": "8px"}}>
        Take Screenshot
      </Button>{' '}
      <Button className={classes.buttonRed} variant="contained" color="secondary"
      style={{"height": "28px", "width": "180px", "fontSize": "14px", "fontWeight": "bold", "borderRadius": "8px"}}>
        Help Centre
      </Button>{' '}
      <Button className={classes.buttonBlue} variant="contained" color="secondary"
      style={{"height": "28px", "width": "180px", "fontSize": "14px", "fontWeight": "bold", "borderRadius": "8px"}}>
        More Projects
      </Button>
    </div>
  );
}
