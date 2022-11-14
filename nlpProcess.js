const { dockStart } = require('@nlpjs/basic');

module.exports = async (q) => {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    const response = await nlp.process('id', q);
    return response;
}