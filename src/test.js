const data = require("./data/data.json");
const fs = require("fs");
const request = require("request");
const mkdirp = require("mkdirp");

// mkdirp.sync("./images");
// let curr = data.data.user.currentReading;

// curr.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {
//     console.log("done");
//   });
// });
// data.data.user.read.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {});
// });

// data.data.user.toRead.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {
//     fs.writeFile("./data/allNew.json", JSON.stringify(data), () => "done");
//   });
// });

function getData(book, dest, cb) {
  var file = fs.createWriteStream(dest);
  let x = /\d+[m]/g;
  function replacer(match, p1, p2) {
    let x = match.replace(/m/g, "l");
    return x;
  }
  let imageUrl = book.book.imageUrl.replace(x, replacer);
  if (imageUrl.includes("nophoto")) {
    imageUrl = "./pages/white-image.png";
  }
  var sendReq = request.get(imageUrl);
  sendReq.on("response", function(response) {
    if (response.statusCode !== 200) {
      return cb("Response status was " + response.statusCode);
    }
  });

  sendReq.on("error", function(err) {
    fs.unlink(dest);

    if (cb) {
      return cb(err.message);
    }
  });

  sendReq.pipe(file);

  file.on("finish", function() {
    book.book.imageUrl = dest;
    file.close(cb);
  });

  file.on("error", function(err) {
    fs.unlink(dest);
    if (cb) {
      return cb(err.message);
    }
  });
}
mkdirp.sync("./images");
// let curr = data.data.user.currentReading;

// curr.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {
//     console.log("done");
//   });
// });
// data.data.user.read.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {});
// });

// data.data.user.toRead.forEach(d => {
//   getData(d, `./images/${d.book.id}.jpg`, () => {
//     fs.writeFile("./data/allNew.json", JSON.stringify(data), () => "done");
//   });
// });

imageUrl =
  "https://github.com/SachinMaharana/mysite/blob/master/src/images/white-image.jpg";
let y = request.get(imageUrl);

console.log(y);
