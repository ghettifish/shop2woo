const fs = require('fs'),
xml2js = require('xml2js'),
parser = new xml2js.Parser();

//This is just converts from XML to JSON
fs.readFile(__dirname + '/data/pprsfull.xml', function(err, data) {
    parser.parseString(data, function(err, result) {
        fs.writeFile(__dirname + '/data/pprsfull.json', JSON.stringify(result, null, 4), () => {

        });
    });
});