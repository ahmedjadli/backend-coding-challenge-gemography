const axios = require("axios");
const Language = require("../../models/Language");

// Sort repositories by languages
const SortByLanguage = (LangArr, Repos) => {
  return [
    ...new Set(
      LangArr.map((lang) => {
        let repos = [];
        let count = 0;
        Repos.map((repo) => {
          if (repo.language === lang) {
            repos.push(repo);
            count++;
          }
        });
        if (lang === null) lang = "Unkown";
        return new Language(lang, repos, count);
      })
    ),
  ];
};

// calculate the date of a month before
const CalculateDate = () => {
  let today = new Date(),
    month = "" + today.getMonth(),
    day = "" + today.getDate(),
    year = today.getFullYear();

  return [
    year,
    month.length < 2 ? "0" + month : month,
    day.length < 2 ? "0" + day : day,
  ].join("-");
};

// main algorithm to fetch and recalculate repos by language and count repos by languages
fetchGithub = async () => {
  let allRepos = [];
  let LanguagesNameArr = [];
  let SortedReposByLanguageArr = [];
  // fetch all repos
  allRepos = await axios
    .get(
      `https://api.github.com/search/repositories?q=created:>${CalculateDate()}&sort=stars&order=desc&per_page=100`
    )
    .then((res) => {
      return res.data.items;
    });

  // extract distinct languages name from repos array
  LanguagesNameArr = [...new Set(allRepos.map((repo) => repo.language))];

  SortedReposByLanguageArr = SortByLanguage(LanguagesNameArr, allRepos);

  return SortedReposByLanguageArr;
};

module.exports = fetchGithub;
