import React from 'react';
import { Box, Grid, Button, Card, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { margin: '1rem 0' },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '1rem 0rem',
    },
  },
  content: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  margin: {
    margin: '1rem 0',
    [theme.breakpoints.up('sm')]: {
      margin: '3rem 0',
    },
  },
}));

function Head(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <Container className={classes.container}>
          <Grid className={classes.content}>
            <h1 className={classes.margin}>20% off for your First shoping</h1>
            <p className={classes.margin}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className={classes.margin}>
              <Button variant='contained' color='secondary' size='large'>
                Shop Now
              </Button>
            </div>
          </Grid>
          <Grid className={classes.margin}>
            <img src={'https://picsum.photos/200'} alt='image' />
          </Grid>
        </Container>
      </Card>
    </Box>
  );
}

export default Head;
