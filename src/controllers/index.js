const axios = require("axios");
const { all } = require("../app");
const baseURL =
  "https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc";

const fetchGithub = async () => {
  let allRepos = [];

  allRepos = await axios
    .get(
      "https://api.github.com/search/repositories?q=created:>2020-07-11&sort=stars&order=desc&per_page=100"
    )
    .then((res) => {
      return res.data.items;
    });

  let Languages = [
    ...new Set(allRepos.map((repo) => repo.language != null && repo.language)),
  ];

  let jsRepos = [...allRepos.filter((repo) => repo.language !== "Kotlin")];

  console.log(jsRepos.length);
};

fetchGithub();
