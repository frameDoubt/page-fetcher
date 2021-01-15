const request = require('request');
const fs = require('fs');
const userInput = process.argv.splice(2);

request(userInput[0], (error, response, body) => {
  // console.log('Error report: ',error);
  // console.log('Status code: ', response.statusCode);
  fs.writeFile(userInput[1], body, (err) => {
    if (err) {throw err};
    console.log(`File has successfully been downloaded. It was ${Buffer.byteLength(body)} bytes`);
  });
});