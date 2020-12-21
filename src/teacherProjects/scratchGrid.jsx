import React from 'react';
import './teacherProjects.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageRowOne from './scratchImage1';
import ImageRowTwo from './scratchImage2';
import ImageRowThree from './scratchImage3';
import SidePanel from './sideDrawer/sidePanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
  }
}));


export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className="teacher-login">
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={classes.paper}></div>
          <SidePanel />
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}></div>
          <ImageRowOne />
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}></div>
          <ImageRowTwo />
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}></div>
          <ImageRowThree />
        </Grid>
        </Grid>
    </div>
    </div>
  );
}