import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonRight from './buttons-right';
import ButtonLeft from './buttons-left';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
}));

export default function FullWidthGrid() {
const classes = useStyles();
return (
    <div className={classes.root}>
<Grid container spacing={3}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        <ButtonLeft />
      </Grid>
      <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        <ButtonRight />
      </Grid>
   </Grid>
</div>
  );
}