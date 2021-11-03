import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import searchStyles from '../../assests/jss/searchResultStyles'
import PersonIcon from '@material-ui/icons/Person'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PaymentIcon from '@material-ui/icons/Payment'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => searchStyles(theme))

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
    <>
      <Box mb={2}>
        <Typography className={classes.heading}>Dashboard</Typography>
      </Box>
      <Box mb={2}>
        <p>
          <LocalMallIcon />
          Orders
        </p>
        <p>
          <FavoriteIcon />
          Wishlist
        </p>
        <p>
          <ContactSupportIcon />
          Support
        </p>
      </Box>

      <Box mb={2}>
        <Typography className={classes.heading}>Account Setting</Typography>
      </Box>
      <Box mb={2}>
        <p>
          <PersonIcon />
          Profile
        </p>
        <p>
          <LocationOnIcon />
          Addresses
        </p>
        <p>
          <PaymentIcon />
          Payment
        </p>
      </Box>
    </>
  )
}
