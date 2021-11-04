import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    height: '120px',
    marginBottom: '1rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
}));

export default function IteamType(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {props.title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {props.subtitle}
          </Typography>
          <Button size='small'>
            <ArrowForwardIosIcon fontSize='small' />
          </Button>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={props.img} />
    </Card>
  );
}
