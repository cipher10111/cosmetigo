import React from 'react'
import { Box, Grid, Button, Card, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: { margin: '1rem 0' },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    backgroundColor: '#FFBCBC',
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
      margin: '2rem 0',
    },
  },
}))

function Head(props) {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Card>
        <Container className={classes.container}>
          <Grid className={classes.content}>
            <Typography className={classes.margin} variant="h4">
              20% off for your First shoping
            </Typography>
            <p className={classes.margin}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className={classes.margin}>
              <Link href="/search" underline="none">
                <Button variant="outlined" size="large">
                  Shop Now
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid className={classes.margin}>
            <img src={'https://picsum.photos/200'} alt="image" />
          </Grid>
        </Container>
      </Card>
    </Box>
  )
}

export default Head
