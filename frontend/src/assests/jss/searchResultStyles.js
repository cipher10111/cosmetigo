const SearchResultStyles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '60px',
  },
  gridClass: {
    padding: '10px',
    border: '1px solid #F8F8FF',
    borderRadius: '5px',
    background: '#FFFAF0',
    textAlign: 'left',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  inputBasic: {
    width: '60px',
  },

  mediaQuery: {
    '@media (maxWidth:320px)': {
      mediaClass: {
        display: 'none',
      },
    },
  },
})

export default SearchResultStyles
