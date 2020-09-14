const express = require("express");
const router = express.Router();
const SortByLanguageController = require("../../controllers/SortedByLanguage");

// get All Languages route
router.get("/api/reposBylang", SortByLanguageController.SortByLanguage);

module.exports = router;
