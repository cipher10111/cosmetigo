const homeStyles = (theme) => ({
  root: {
    padding: '1rem 1rem 0 1rem ',
    fontFamily: 'Helvetica',
    [theme.breakpoints.up('md')]: {
      padding: '1rem 8rem 0 8rem ',
    },
  },
  container: { margin: '1rem 0' },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '1rem 0rem',
    },
  },
  cardContent: {
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
  itemTypesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '1rem',
    margin: 'auto',
  },
  newProductHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newProductContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '1rem',
    margin: 'auto',
  },
  brandContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 'auto',
  },
  brandCard: {
    width: '200px',
    height: '100px',
    marginBottom: '1rem',
  },
  media: {
    width: '100%',
    height: '100%',
  },
})

export default homeStyles
