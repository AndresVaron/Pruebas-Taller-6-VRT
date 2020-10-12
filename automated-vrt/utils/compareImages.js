const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
const imagesRoot = 'cypress/screenshots/vrtColor.spec.js/';

const compare = async (imageId) => {
    const options = {
        output: {
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true,
            ignoredBox: { left: 0, top: 0, bottom: 46 }
        },
        scaleToSameSize: true,
        ignore: 'less'
    };

    const data = await compareImages(await fs.readFile(`${imagesRoot}base/${imageId}.png`), await fs.readFile(`${imagesRoot}/modified/${imageId}.png`), options);
    console.log(`Image ${imageId} processed with difference of: ${data.misMatchPercentage}`);
    await fs.writeFile(`images/results/${imageId}.png`, data.getBuffer());
    const result = { reportDate: new Date(), report: data, imageId, baseImage: `/base/${imageId}.png`, modifiedImage: `/modified/${imageId}.png`, resultImage: `/results/${imageId}.png` };
    const db = require('../data/db.json');
    await fs.writeFile('data/db.json', JSON.stringify([result, ...db]));
    return result;
};

module.exports = compare;