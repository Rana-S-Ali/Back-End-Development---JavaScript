/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//1. Use the inquirer npm package to get user input.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 
inquirer
  .prompt([
    {
      name: "url",
      message: "Enter your url",
      type: "input",
    },
  ])
  .then(function (answer) {
    fs.writeFile("URL.txt", answer.url, (err) => {
      if (err) throw err;
      console.log("The details has been saved!");
      qr.image(answer.url, { type: "png" }).pipe(
        fs.createWriteStream("qr_img.png").on("finish", () => {
          console.log("QR Code created.");
        })
      );
    });
  });

  //var qr = require('qr-image');
 
//   var qr_svg = qr.image(answer.url, { type: 'svg' });
//   qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
   
//   var svg_string = qr.imageSync(answer.url, { type: 'svg' });



// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     "Enter youe url:"
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });