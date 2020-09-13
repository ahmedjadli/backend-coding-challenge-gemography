import React from "react";
import {
  Typography,
  Avatar,
  Container,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import SelectLanguageMenu from "./components/SelectLanguageMenu";
import ReposList from "./components/ReposList";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container align="center" component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.box}>
        <Avatar className={classes.avatar}>
          <GitHubIcon fontSize="medium" />
        </Avatar>
        <Typography component="h1" variant="h6">
          List of the languages used by the 100 trending public repos on GitHub
        </Typography>
        <SelectLanguageMenu />
        <ReposList />
      </div>
    </Container>
  );
};

export default App;
