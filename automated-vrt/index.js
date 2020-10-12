const express = require('express');
const app = express();
const cors = require('cors');
const compare = require('./utils/compareImages');
const takeImages = require('./utils/takeImages');
app.use(express.json());
app.use(cors());

app.use('/results', express.static('images/results'));
app.use('/base', express.static('cypress/screenshots/vrtColor.spec.js/base'));
app.use('/modified', express.static('cypress/screenshots/vrtColor.spec.js/modified'));

app.post('/api/reports', async (req, res) => {
    try {
        const id = new Date().getTime();
        await takeImages(id);
        const result = await compare(id);
        res.json({ data: result });
    } catch (error) {
        console.log(error);
        res.status(400).json({ errors: ['Error generando el reporte', error] });
    }
});

app.get('/api/reports', (req, res) => {
    const db = require('./data/db.json');
    res.json({ data: db });
});

app.listen(3001, () => {
    console.log('App running in port ' + 3001);
});