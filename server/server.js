/*
 * Hier findet die Portverarbeitung statt,
 * so dass Daten gesendet werden koennen mit put und get etc
 *
 * Monitoring ueber nodemon ist der package.json eingetrage und startet
 * automatisch
 */
const express = require('express');

/**
 * Verantwortlich dafuer das die HttpAnfragen
 * auf richtig gehandelt wer den. Sprich die Url
 * unter welcher nachher alles zu finden ist.
 * Also der Startpunkt.
 * @type {Router}
 */
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/testrest',apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});