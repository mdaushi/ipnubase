const readJson = require("../services/readJson");
const Fuse = require("fuse.js")

function parseJson(file) {
    let readJsonService = new readJson("api/data/" + file);
    return readJsonService.get();
  }

class makestaModel {
    constructor() {
        this.source = parseJson("makesta.json");
    }

    searchFuse(string){
        const options = {
            keys: ["caption","definition", "lessons"]
        }
        const fuse = new Fuse([this.source], options)
        this.out = fuse.search(string)
        return this
    }

    searchPartial(key){
        this.out = this.source[key]
        return this
    }

    get(){
        return this.out
    }
}

module.exports = makestaModel