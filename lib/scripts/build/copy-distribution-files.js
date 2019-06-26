const fs = require('fs');

fs.createReadStream('./package.json').pipe(fs.createWriteStream('./dist/package.json'));
fs.createReadStream('./README.md').pipe(fs.createWriteStream('./dist/README.md'));
