const request = require('request');
const fs = require('fs');
const userInput = process.argv.splice(2);

request(userInput[0], (error, response, body) => {
  // console.log('Error report: ',error);
  // console.log('Status code: ', response.statusCode);
  fs.writeFile(userInput[1], body, (err) => {
    if (error) {throw error};
    console.log(`Downloaded and saved ${Buffer.byteLength(body)} bytes to ${userInput[1]}`);
  });
});