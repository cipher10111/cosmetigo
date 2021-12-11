import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Rating from "@material-ui/lab/Rating";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import searchStyles from "../../assests/jss/searchResultStyles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => searchStyles(theme));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function SideNav() {
  const [value, setValue] = React.useState(30);
  const classes = useStyles();
  const handleChange = (event) => {
    setState({
      sort: event.target.value
    });
  };

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box mb={2}>
        <p>
          <strong>Categories:</strong>
        </p>
      </Box>
      <Box mb={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Bath Preparations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More Categories of Bath Preparations</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Eye Makeup Preparations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More Categories of Eye Makeup Preparations</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Fragrance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More Categories of Fragrance</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className={classes.heading}>Hair Preparations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More Categories of Hair Preparations</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box mb={2}>
        <p>
          <strong>Price Range:</strong>
        </p>
      </Box>
      <Box mb={3}>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
          onChange={handleChangeSlider}
        />
      </Box>
      <Divider />
      <Box mt={3}>
        <p>
          <strong>Brands:</strong>
        </p>
      </Box>
      <Box mb={3}>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Maccs
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Karts
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Baars
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Bukks
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Luasis
        </p>
      </Box>
      <Divider />
      <Box mt={3} mb={3}>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          On Sale
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          In Stock
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Featured
        </p>
      </Box>
      <Divider />
      <Box mt={3}>
        <p>
          <strong>Ratings:</strong>
        </p>
      </Box>
      <Box mb={3} mt={2}>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Rating name="read-only" defaultValue={5} precision={0.5} size="small" readOnly />
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly />
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Rating name="read-only" defaultValue={3.5} precision={0.5} size="small" readOnly />
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Rating name="read-only" defaultValue={2.5} precision={0.5} size="small" readOnly />
        </p>
        <p>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Rating name="read-only" defaultValue={1.5} precision={0.5} size="small" readOnly />
        </p>
      </Box>
    </>
  );
}
