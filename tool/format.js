const fs = require('fs');
const path = require('path');
const {compositeTargets} = require('../editor/common/blockHelper');
const {parseBlocks} = require('../editor/common/parseBlocks');

for (let lang of ['zh', 'en']) {
    parseBlocks(path.resolve(__dirname, `../${lang}/option`)).then(function (json) {
        for (let fileName in json) {
            const fileTargets = json[fileName];
            const filePath = path.resolve(__dirname, `../${lang}/option/`, fileName.replace('.', '/')) + '.md';
            fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
        }
    });
}