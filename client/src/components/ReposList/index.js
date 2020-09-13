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

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getLanguageNameAbv = (name) => {
  let word = "";
  for (let i = 0; i < name.length; i++) {
    if (
      name.charAt(i) === name.charAt(i).toUpperCase() &&
      name.charAt(i) !== " "
    )
      word += name.charAt(i);
  }
  return word;
};

const ReposList = ({ filtredRepos }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {!filtredRepos.length ? (
        "No Language Selected !"
      ) : (
        <Grid container spacing={2}>
          {filtredRepos.map((lang) => {
            let color = getRandomColor();
            let abv = getLanguageNameAbv(lang.name);
            console.log({ color, abv });
            return lang.repos.map((repo) => (
              <Grid key={repo.id} item xs={12} sm={4}>
                <RepoItem
                  name={lang.name}
                  repo={repo}
                  color={color}
                  abv={abv}
                />
              </Grid>
            ));
          })}
        </Grid>
      )}
    </Paper>
  );
};

export default ReposList;
