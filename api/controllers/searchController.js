const nlp = require("../services/nlp")
const apiResponse = require("../services/api")
const nlpProcess = require("../../nlpProcess")

async function search(req, res, next) {
    let s = req.query.s

    let nlpService = new nlp(s)
    let result = nlpService.removeStopwords().toString().get()

    const process = await nlpProcess(result)
    // console.log(process)

    if(process.intent.match(/dataset/)){
        const answer = process.answer.split('.')
        const modelDataset = require("../models/" + answer[1] + "Model")
        var dataFuse = new modelDataset().searchPartial(answer[0]).get()
    }else{

    }
    
    return res.json(apiResponse.jsonSuccess("", dataFuse));
}

module.exports = { search}
