const cheerio = require('cheerio');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');


function _parseRespone(response){
    // const resultString = JSON.parse(JSON.stringify(response.data));

    const $ = cheerio.load(response);
    const result = $('#hitlist').find('.hit');

    const hits = result.map((index, elem) => {
        const words = $(elem).contents().filter(function () {
            return this.nodeType === 3;
        })
        .toArray()
        .map((item)=> {
            //This javascript code removes all 3 types of line breaks
            const someText = item.data.replace(/(\r\n|\n|\r)/gm,"");
            return someText;
        })
        .filter((item)=> item !== "")[0].split(",");
        
        const wordclass = $(elem).find('.wordclass').text();

        const formElement = $(elem).find('.formclass')
        const formclass = formElement.text();

        return {
            wordclass, 
            formclass,
            words
        }
    });
    return hits.toArray();
}


function find(word, language){
    const url = `http://ordbok.lagom.nl/woord.cgi/sv?q=${word}&l=${language}`;
    
    const result = fetch(url)
    .then(res => res.arrayBuffer())
    .then(arrayBuffer => iconv.decode(new Buffer(arrayBuffer), 'iso-8859-1').toString())
    .then(converted=>_parseRespone(converted))
    .catch(error => {
        console.log(error);
    });
    return result;
}

module.exports = {find}