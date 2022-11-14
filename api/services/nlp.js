const { TokenizerId, StopwordsId } = require("@nlpjs/lang-id");

function tokenize(string) {
  const tokenizer = new TokenizerId();
  return tokenizer.tokenize(string, true);
}

class nlp {
  constructor(string) {
    this.out = tokenize(string);
  }

  removeStopwords() {
    const stopwords = new StopwordsId();
    this.out = stopwords.removeStopwords(this.out);
    return this;
  }

  toString(){
    this.out = this.out.join(" ");
    return this
  }

  get() {
    return this.out;
  }
}

module.exports = nlp;
