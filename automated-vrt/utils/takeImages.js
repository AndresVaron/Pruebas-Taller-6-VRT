const cypress = require('cypress');
const takeImages = (imageId) => {
    return new Promise((resolve, reject) => {
        cypress.run({
            spec: './cypress/integration/vrtColor.spec.js',
            env: { imageId }
        }).then((results) => {
            resolve(results);
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    });
};

module.exports = takeImages;