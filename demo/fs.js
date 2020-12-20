const fs = require('fs');
const path = require('path');

/* fs.mkdir(path.join(__dirname, 'test'), (err) => {
  if (err) {
    throw err;
  }

  console.log('Folder has been created');
}); */
const filePath = path.join(__dirname, 'test', 'newFile.txt');
/*
fs.writeFile(filePath, 'Hello world or something like that', (err) => {
  if (err) {
    throw err;
  }

  console.log('File txt has been created successfuly!!!');
});
fs.appendFile(filePath, '\nHello world  again and again !!!!', (err) => {
  if (err) {
    throw err;
  }

  console.log('New text to file has been added successfuly!!!');
}); */
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }

  /*   const data = Buffer.from(content);

  console.log('Content: ', content.toString());
 */
  console.log(content);
});
