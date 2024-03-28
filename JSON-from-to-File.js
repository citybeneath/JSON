// const jsonReader = require('./jsonReaderModule');
// const filePath = 'data.json';
// const jsonObj = jsonReader.readJsonFromFile(filePath);
// console.log(jsonObj);

// const writeJsonToFile = require('./writeJsonToFile');
// const jsonObj = {
//   "name": "John Doe",
//   "age": 30,
//   "isStudent": false
// };
// writeJsonToFile(jsonObj, 'output.json');

const { readFileSync, writeFileSync } = require('fs');

function writeJsonToFile(jsonObj, filePath) {
    try {
        const data = JSON.stringify(jsonObj, null, 2);
        writeFileSync(filePath, data);
        return 'OK';
    } catch (error) {
        console.error('Error writing JSON object to file:', error);
        return error;
    }
}

async function readJsonFromFile(filePath) {
    try {
        const data = readFileSync(filePath, 'utf8');
        const json = await JSON.parse(data);
        return json;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return error;
    }
}

module.exports = { readJsonFromFile, writeJsonToFile };
