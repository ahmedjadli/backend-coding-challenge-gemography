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

module.exports = Language;
