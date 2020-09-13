const fetchGithub = require("../../tasks/SortByLanguageAPI");

exports.SortByLanguage = (req, res) => {
  fetchGithub()
    .then((data) => {
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};
