//Q1
console.log('Hello World!');

//Q2
const os = require('os');
console.log('Arch : ' + os.arch());
console.log('CPUs : ' + os.cpus().length);
console.log('OS : ' + os.platform());

//Q3
const fs = require('fs');
const fileName = __dirname + '/file.txt';

// - d
fs.readFile(fileName, (err, data) => {
    if(err) {
        console.error(err);
    }

    //e - Prints buffer values
    //console.log(data);

    //e
    console.log(data.toString());

});
//f
const dataSy = fs.readFileSync(fileName);
console.log(dataSy.toString());

//Q4
const fName = __dirname + '/file.txt';
const outFileName = __dirname + '/file-copy.txt';

const readStream = fs.createReadStream(fName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);
readStream.on('data', data => {
    console.log(data.toString());
   });

//Q5
const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
        break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
        break;
    }
       
   }).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
   });