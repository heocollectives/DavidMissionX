import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './teacherProjects.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    fontSize: '9px',
    fontWeight: 'bold',
    float: 'right',
  },
},
}));

export default function ContainedButtons(props) {
    const classes = useStyles();
    return(
      <div className="buttons-left">
      <div className={classes.root}>
        <Button className="buttons-1" variant="contained">BEGINNER</Button>
        <Button className="buttons-1" variant="contained">INTERMEDIATE</Button>
        <Button className="buttons-1" variant="contained">ADVANCED</Button>
        </div>
        </div>
    );}