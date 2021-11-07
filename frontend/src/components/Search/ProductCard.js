import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles({
  root: {
    width: '280px',
    height: '450px',
  },
  media: {
    height: '300px',
  },
  grow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default function ProductCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent align="center">
          <Typography gutterBottom variant="p" component="h3">
            {props.title}
          </Typography>

          <Typography gutterBottom variant="p" component="p">
            <Rating
              name="read-only"
              defaultValue={props.rating}
              precision={0.5}
              size="small"
              readOnly
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.grow}>
        <Typography gutterBottom variant="p" component="p">
          ₹ {props.amount}
        </Typography>
        <Button size="small" color="secondary">
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
