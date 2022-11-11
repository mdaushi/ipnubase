const express = require("express");
const router = express.Router();
const chapterController = require("../controllers/chapterController");

router.get("/", chapterController.index);
router.get("/:chapter", chapterController.chapter);
router.get("/:chapter/part/:part", chapterController.part);
router.get("/:chapter/part/:part/materi/:materi", chapterController.materi);

module.exports = router;
