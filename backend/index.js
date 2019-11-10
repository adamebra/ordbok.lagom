const axios = require('axios');
const cheerio = require('cheerio');
const utf8 = require('utf8');


axios.get('http://ordbok.lagom.nl/woord.cgi/sv?q=r%E4nna&l=sv')
    .then(response => {
        const resultString = JSON.parse(JSON.stringify(response.data));
        console.log(resultString)
        const $ = cheerio.load(resultString);
        let result = $('#hitlist').find('.hit');

        console.log(result)
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

            return {
                wordclass: $(elem).find('.wordclass').text(),
                formclass: $(elem).find('.formclass').text(),
                words: words
            }
        });
        console.log(hits);
    })
    .catch(error => {
        console.log(error);
    });