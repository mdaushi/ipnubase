const fs = require("fs");
const path = require("path");

class readJson {
  constructor(source) {
    let rawdata = fs.readFileSync(path.resolve(source));
    let data = JSON.parse(rawdata);
    this.source = data;
  }

  get() {
    return this.source;
  }
}

module.exports = readJson;
