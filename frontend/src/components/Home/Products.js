import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '250px',
      margin: '1rem',
    },
    width: '100%',
    margin: '.5rem',
  },
  media: {
    height: 200,
  },
  grow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

export default function Iteam(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom component='h3'>
            {props.title}
          </Typography>
          <Typography gutterBottom component='p'>
            {props.quant}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.grow}>
        <Typography gutterBottom component='p'>
          ₹ {props.amount}
        </Typography>
        <Button size='small' color='secondary'>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
