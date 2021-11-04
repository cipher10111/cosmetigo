import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Card';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    height: '100px',
    marginBottom: '1rem',
  },
  media: {
    width: '100%',
    height: '100%',
  },
}));

export default function Brand(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link href={props.href}>
        <img className={classes.media} src={props.img} alt={'brand'} />
      </Link>
    </Box>
  );
}
