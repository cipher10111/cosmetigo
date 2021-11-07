import * as React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        cosmetigo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  brand: {
    width: '90%',
    [theme.breakpoints.up('md')]: {
      width: '35%',
    },
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '95%',
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
  social: {},
}))

function Footer(props) {
  const classes = useStyles()
  return (
    <Box component="footer" sx={{ bgcolor: '#FFD8CC', py: 4 }}>
      <Container maxWidth="lg">
        <div className={classes.footer}>
          <div className={classes.brand}>
            <Typography variant="h5" component="h3">
              Cosmetigo{' '}
            </Typography>
            <Typography component="p">
              Cosmetigo comes with a solution that brings its users a wonderful
              experience of purchasing beauty products online by improving
              customer retention and brand loyalty.
            </Typography>
          </div>
          <div className={classes.address}>
            <h2>Contact</h2>
            <p>70 Washington Square South, New York, NY 10012, United States</p>
            <p>Email: uilib.help@gmail.com</p>
            <div className={classes.social}>
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </Box>
  )
}

export default Footer
