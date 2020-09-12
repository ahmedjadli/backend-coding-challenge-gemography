const axios = require("axios");
const Language = require("../../models/Language");

const SortByLanguage = (LangArr, Repos) => {
  return [
    ...new Set(
      LangArr.map((lang) => {
        let repos = [];
        let count = 0;
        Repos.map((repo) => {
          if (repo.language === lang) {
            repos.push(epo);
            count++;
          }
        });
        if (lang === null) lang = "unkown";
        return new Language(lang, repos, count);
      })
    ),
  ];
};

const fetchGithub = async () => {
  let allRepos = [];
  let LanguagesNameArr = [];
  let SortedReposByLanguageArr = [];
  // fetch all repos
  allRepos = await axios
    .get(
      "https://api.github.com/search/repositories?q=created:>2020-07-11&sort=stars&order=desc&per_page=100"
    )
    .then((res) => {
      return res.data.items;
    });

  // extract distinct languages name from repos array
  LanguagesNameArr = [...new Set(allRepos.map((repo) => repo.language))];

  SortedReposByLanguageArr = SortByLanguage(
    LanguagesNameArr,
    SortedReposByLanguageArr
  );

  return SortedReposByLanguageArr;
};

fetchGithub();
