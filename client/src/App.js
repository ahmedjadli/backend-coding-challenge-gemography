import React, { useState, useEffect } from "react";
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
import axios from "axios";

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

const fetchRepos = (setRepos, url) => {
  axios
    .get(url)
    .then((res) => {
      setRepos(res.data.data);
    })
    .catch((err) => console.log(err));
};

const filterLangNames = (RepoArr) => {
  const LangArr = [];
  RepoArr.filter((repo) => LangArr.push(repo.name));
  return LangArr;
};

const filterBySelectedLanguage = (allRepos, selectedLanguageNames) => {
  allRepos = allRepos.filter((repo) =>
    selectedLanguageNames.includes(repo.name)
  );
  return allRepos;
};

const App = () => {
  const classes = useStyles();
  const [allRepos, setAllRepos] = useState([]);
  const [langNames, setLangNames] = useState([]);
  const [selectedLanguageNames, setSelectedLanguageNames] = useState([]);
  const [filtredRepos, setFiltredRepos] = useState([]);

  useEffect(() => {
    fetchRepos(setAllRepos, "/api/reposBylang");
  }, []);

  useEffect(() => {
    setLangNames(filterLangNames(allRepos));
    setFiltredRepos(filterBySelectedLanguage(allRepos, selectedLanguageNames));
  }, [allRepos, selectedLanguageNames]);

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.box}>
          <Avatar className={classes.avatar}>
            <GitHubIcon fontSize="medium" />
          </Avatar>
          <Typography align="center" component="h1" variant="h6">
            List of the languages used by the 100 trending public repos on
            GitHub
          </Typography>
          <SelectLanguageMenu
            langNames={langNames}
            setSelectedLanguageNames={setSelectedLanguageNames}
            selectedLanguageNames={selectedLanguageNames}
          />
          <ReposList filtredRepos={filtredRepos} />
        </div>
      </Container>
    </>
  );
};

export default App;
