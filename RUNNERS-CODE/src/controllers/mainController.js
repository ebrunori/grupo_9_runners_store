const path = require('path');
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require('../database/models');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

mainController = {
    index: function(req, res) {
        db.Products.findAll({
            include: [{association: 'colours' },{association: 'sizes' },{association: 'images' }]
        })
        .then(products => {
            res.render(path.join(__dirname, '../views/index'), {products,toThousand});
        });
    },

    login: function(req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    register: function(req, res) {
        res.render(path.join(__dirname, '../views/users/register'))
    },
    
    productCart: function(req, res) {
        db.Products.findByPk(req.params.id, {
            include: [{association: 'colours' },{association: 'sizes' },{association: 'images' }]
        })
        /*.then(product => {
            return res.json(product)
          })*/
    
        .then(product => {
            res.render('products/productCart', {product});
        });
    }


};

module.exports = mainController;