import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import PersonIcon from '@material-ui/icons/Person'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PaymentIcon from '@material-ui/icons/Payment'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  gridClass: {
    padding: '20px',
    border: '1px solid #F8F8FF',
    borderRadius: '5px',
    background: '#FFFAF0',
    textAlign: 'left',
    fontSize: '16px',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
  muIcon: {
    color: '#C70039 ',
    fontSize: '17px',
    marginTop: '30px',
  },
}))

export default function MyOrderSideNav() {
  const classes = useStyles()
  const handleChange = (event) => {
    setState({
      sort: event.target.value,
    })
  }

  const [checked, setChecked] = React.useState(true)

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <Box className={classes.gridClass}>
      <Box mb={2}>
        <Typography className={classes.heading}>Dashboard</Typography>
      </Box>
      <Box mb={2}>
        <p>
          <LocalMallIcon className={classes.muIcon} />
          {'  '}
          Orders
        </p>
        <p>
          <FavoriteIcon className={classes.muIcon} />
          {'  '}
          Wishlist
        </p>
        <p>
          <ContactSupportIcon className={classes.muIcon} />
          {'  '}
          Support
        </p>
      </Box>
      <Divider />
      <Box mb={2} mt={3}>
        <Typography className={classes.heading}>Account Setting</Typography>
      </Box>
      <Box mb={2}>
        <p>
          <PersonIcon className={classes.muIcon} />
          {'  '}
          Profile
        </p>
        <p>
          <LocationOnIcon className={classes.muIcon} />
          {'  '}
          Addresses
        </p>
        <p>
          <PaymentIcon className={classes.muIcon} />
          {'  '}
          Payment
        </p>
      </Box>
    </Box>
  )
}
