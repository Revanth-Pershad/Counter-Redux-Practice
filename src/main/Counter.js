import React from "react";
import { Grid } from "@mui/material";
import classes from "./Counter.module.css";
import { ButtonGroup, Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
    const currCount = useSelector((state) => (state.counter.value));
    const dispatch = useDispatch();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <Grid item className={classes.gridItem}>
        <h1>Counter</h1>
        <div className={classes.currentCount}>{currCount}</div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className={classes.buttong}
        >
          <Button className={classes.btn} onClick = {() => dispatch(increment())} ><AddIcon /></Button>
          <Button className={classes.btn} onClick = {() => dispatch(decrement())} ><RemoveIcon /></Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Counter;
