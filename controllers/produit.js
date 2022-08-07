const Product = require('../models/produit');

exports.createProduct = (req, res) => {
    const prod = new Product(req.body);

    prod.save()
        .then((product) => {
            return res.status(201).json({ product })
        })
        .catch((error) => { return res.status(400).json({ error }) })
};

exports.getOneProduct = (req, res) => {
    const id = req.params.id;

    Product.findOne({ _id: id })
        .then((product) => { return res.status(200).json({ product }) })
        .catch((error) => { return res.status(400).json({ error }) })


};

exports.getAllProduct = (req, res) => {
    Product.find()
        .then((product) => { return res.status(200).json({ product }) })
        .catch((error) => { return res.status(400).json({ error }) })

}