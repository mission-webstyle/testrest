/*
 * Waehrend die server.js auf HTTP-Anfragen reagiert
 * checken wir hier welcher zusatz an die URL angehangen wurde
 * um so zu entscheiden was genau aufgerufen wird.
 * Hierzu gibt es eine Dokumentation rudolf-histel.de
 */

const express = require('express');
const db = require('../db');
const router = express.Router();



/**
 * Get All Products
 */
router.get('/products', async (request, response, next) => {

    try {
        let resultSet = await db.getAllProducts();
        response.json(resultSet);
    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});


/**
 * Get Specific Product By id
 */
router.get('/products/:id', async (request, response, next) => {

    try {
        let resultSet = await db.getSpecificProductById(request.params.id);
        response.json(resultSet);
    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});


/**
 * Insert Product Values
 */
router.post('/products/insert/:name,:price', async (request, response, next) => {

    try {

        let valuesToInsert = [request.params.name, request.params.price];

        let resultSet = await db.insertProduct(valuesToInsert);

        response.json(resultSet);

    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});


/**
 * Update Product
 */
router.put('/products/update/:name,:price,:id', async (request, response, next) => {

    try {
        let valuesToUpdate = [request.params.name, request.params.price,request.params.id];

        let results = await db.updateProduct(valuesToUpdate);

        response.json(results);

    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});

/**
 * Delete Product By Id
 */
router.delete('/products/delete/:id', async (request, response, next) => {

    try {
        let results = await db.deleteProduct(request.params.id);

        response.json(results);

    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});

module.exports = router;