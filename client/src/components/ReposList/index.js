import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import RepoItem from "../RepoItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
    maxWidth: "70%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const ReposList = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <RepoItem />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RepoItem />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RepoItem />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RepoItem />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReposList;
