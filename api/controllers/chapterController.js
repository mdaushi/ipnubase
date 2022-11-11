const chapterJson = require("../data/chapters.json");
const chapterModel = require("../models/chapterModel");
const apiResponse = require("../services/api");
const fs = require("fs");
const path = require("path");

function index(req, res, next) {
  let chapter = new chapterModel().all();
  return res.json(apiResponse.jsonSuccess("", chapter));
}

function chapter(req, res, next) {
  let chapterId = req.params.chapter;

  let chapter = new chapterModel().findById(chapterId).get();

  if (typeof chapter === "undefined") {
    return res.status(404).json(apiResponse.jsonError("Chapter not found"));
  }

  return res.json(apiResponse.jsonSuccess("", chapter));
}

function part(req, res, next) {
  let chapterId = req.params.chapter;
  let part = req.params.part;

  if (!fs.existsSync(path.resolve("api/data/" + part + ".json"))) {
    return res
      .status(404)
      .json(apiResponse.jsonError(part + " part not found"));
  }

  let chapter = new chapterModel().findById(chapterId).findPart(part).get();
  return res.json(apiResponse.jsonSuccess("", chapter));
}

function materi(req, res, next) {
  let chapter = req.params.chapter;
  let bagian = req.params.bagian;
  let materi = req.params.materi;

  console.log(req.params);
  return res.json(apiResponse.jsonSuccess(""));
}

module.exports = { index, part, materi, chapter };
