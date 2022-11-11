const readJson = require("../services/readJson");

function parseJson(file) {
  let readJsonService = new readJson("api/data/" + file);
  return readJsonService.get();
}

class chapterModel {
  constructor() {
    this.source = parseJson("chapters.json");
  }

  all() {
    return this.source;
  }

  findById(id) {
    this.id = id - 1;
    this.out = this.source[id - 1];
    return this;
  }

  findPart(part) {
    if (typeof this.id === "undefined") {
      throw new Error("method findById must be called");
    }

    let source = parseJson(part + ".json");
    this.out = source;
    return this;
  }

  get() {
    return this.out;
  }
}

module.exports = chapterModel;
