import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './teacherProjects.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      fontSize: '10px',
      fontWeight: 'bold',
      float: 'left',
    },
  },
}));


export default function ContainedButtons() {
    const classes = useStyles();
    return(
      <div className="Buttons">
        
        <div className="buttons-right">   
      <div className={classes.root}>
        <h3>SHOW</h3>
        <Button className="buttons-2" variant="contained">20</Button>
        <Button className="buttons-2" variant="contained">50</Button>
        <Button className="buttons-2" variant="contained">100</Button>
        </div>
        </div>
        </div>
    );
  }