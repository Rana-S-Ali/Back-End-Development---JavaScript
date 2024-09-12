 const fs = require("fs");
// fs.writeFile("message.txt","Helleo from Node.js",(err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log('Data has been written to the file successfully!');
//     }
//   });

  fs.readFile("./message.txt", 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File content:', data);
    }
  });


