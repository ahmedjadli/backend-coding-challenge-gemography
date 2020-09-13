const express = require("express");
const router = express.Router();
const SortByLanguageController = require("../../controllers/SortedByLanguage");

router.get("/api/reposBylang", SortByLanguageController.SortByLanguage);

module.exports = router;
