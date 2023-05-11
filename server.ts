// import fs from 'fs';

// let readStream=fs.createReadStream(__dirname + '/file.txt',{
//     highWaterMark:6400
// });
// let writeStream=fs.createWriteStream(__dirname+'/writeFile.txt')


// // readStream.on("data",(chunk:any)=>{
// //     writeStream.write(chunk)
// //     console.log("new chunk rec");
// // });

// // readStream.on('end',()=>{
// //     console.log("readstream ended")
// // })

// // the above methods can cause backpressuring to avoid backpressuring pipes are used

// readStream.pipe(
//     writeStream
// )

// readStream.on('data',(chunk)=>{
//     console.log(`recieved ${chunk.length} size of data`)
// })

// readStream.on('end',()=>{
//     console.log("finished reading the data stream")
// })


// the below code is to work with the buffer 

const fs = require('fs');

// create a readable stream to read from a file
const readableStream = fs.createReadStream('file.txt');

// create a writable stream to write to a file
const writableStream = fs.createWriteStream('output.txt');

// pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// listen for the 'data' event to process data as it is read from the readable stream
readableStream.on('data', (chunk:any) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

// listen for the 'end' event to know when the readable stream has finished reading
readableStream.on('end', () => {
  console.log('Finished reading from the readable stream.');
});

// create a buffer to hold data to be written to the writable stream
const buffer = Buffer.from('Hello, world!', 'utf8');

// write the buffer to the writable stream
writableStream.write(buffer);

// listen for the 'finish' event to know when the writable stream has finished writing
writableStream.on('finish', () => {
  console.log('Finished writing to the writable stream.');
});
