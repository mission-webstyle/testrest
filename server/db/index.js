const mySql = require('mysql');

const pool = mySql.createPool({
    connectionLimit: 10,
    password: 'FLte6yjfn3~3Tnnh',
    user: 'testrest',
    database: 'dbproducts',
    host: 'localhost',
    port: '3306'
});

// const pool = mySql.createPool({
//     connectionLimit: 10,
//     password: 'FLte6yjfn3~3Tnnh',
//     user: 'testrest',
//     database: 'dbproducts',
//     host: 'localhost',
//     port: '3306'
// });

let daoProducts = {};

/**
 * Gibt alle Produkte zurueck
 * @returns {Promise<unknown>}
 */
daoProducts.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM products", (err, results) => {
            if (err) {
                return reject(err)
            }

            return resolve(results)
        });
    });
};


/**
 * Gibt das Produkt mit der angegebene Id zurueck
 * @param id : Des gesuchten Produktes
 * @returns {Promise<unknown>}
 */
daoProducts.getSpecificProductById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM `products` WHERE `id` =?", id, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        });
    });
};

/**
 * Insert Product
 * @returns {Promise<unknown>}
 */
daoProducts.insertProduct = (values) => {
    return new Promise((resolve, reject) => {
        // var values = [name,price]
        pool.query("INSERT INTO `products` (`id`, `name`, `price`) VALUES (NULL, ?, ?)", values, (err, results) => {
            if (err) {
                return reject(err)
            }

            console.log(results)
            return resolve(results)
        });
    });
};


/**
 * Update Product
 * @param id : Des gesuchten Produktes
 * @returns {Promise<unknown>}
 */
daoProducts.updateProduct = (values) => {
    return new Promise((resolve, reject) => {
        // var values = [name,price]
        pool.query("UPDATE `products` SET `name` = ?, `price` = ? WHERE `id` = ?", values, (err, results) => {
            if (err) {
                return reject(err)
            }

            console.log(results)
            return resolve(results)
        });
    });
};

/**
 * Loescht das Produkt mit der uebergebenen Id
 * @param id : Des zu loeschenden Produktes
 * @returns {Promise<unknown>}
 */
daoProducts.deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        // var values = [name,price]
        pool.query("DELETE FROM `products` WHERE `id` = ?;", id, (err, results) => {
            if (err) {
                return reject(err)
            }

            console.log(results)
            return resolve(results)
        });
    });
};

module.exports = daoProducts;