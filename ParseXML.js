require('dotenv').config();
const fs = require('fs'),
xml2js = require('xml2js'),
parser = new xml2js.Parser();

//This is just converts from XML to JSON
fs.readFile(__dirname + '/data/' + process.env.ENTRY_XML, function(err, data) {
    parser.parseString(data, function(err, result) {
        fs.writeFile(__dirname + '/data/raw.json', JSON.stringify(result, null, 4), () => {

        });
    });
});