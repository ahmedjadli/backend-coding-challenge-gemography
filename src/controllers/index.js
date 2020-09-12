const axios = require("axios");
const baseURL =
  "https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc";

class Language {
  constructor(name, repos, count) {
    this.name = name;
    this.repos = repos;
    this.count = count;
  }

  getName() {
    return this.name;
  }

  getRepos() {
    return this.repos;
  }

  getCount() {
    return this.count;
  }

  setName(name) {
    this.name = name;
  }

  setRepos(repos) {
    this.repos = repos;
  }

  setCount(count) {
    this.count = count;
  }
}

const fetchGithub = async () => {
  let allRepos = [];

  // fetch all repos
  allRepos = await axios
    .get(
      "https://api.github.com/search/repositories?q=created:>2020-07-11&sort=stars&order=desc&per_page=100"
    )
    .then((res) => {
      return res.data.items;
    });

  // extract distinct languages name from repos array
  let Languages = [...new Set(allRepos.map((repo) => repo.language))];

  console.log(allRepos.length);

  console.log(Languages);

  let LangArr = [
    ...new Set(
      Languages.map((lang) => {
        let repos = [];
        let count = 0;
        allRepos.map((repo) => {
          if (repo.language === lang) {
            repos.push(repo);
            count++;
          }
        });
        if (lang === null) lang = "unkown";
        return new Language(lang, repos, count);
      })
    ),
  ];

  console.log(LangArr.length);

  let countt = LangArr.reduce((a, b) => a + b.count, 0);
  console.log(countt);
};

fetchGithub();
