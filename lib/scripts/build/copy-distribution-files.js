const fs = require("fs");
// import * as fs from "node:fs";

fs.createReadStream("./package.json").pipe(fs.createWriteStream("./dist/package.json"));
fs.createReadStream("./README.md").pipe(fs.createWriteStream("./dist/README.md"));
