const router = require('express').Router();
const Product = require('../Models/Product');
const User = require('../Models/user');

router.get('/', async(req, res)=> {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (e) {
        res.status(400).send(e.message)
    }
})


router.post('/', async (req, res) => {
    try {
        const {name, description, price, category, images: pictures} = req.body;
        const product = await Product.create({name, description, price, category, pictures})
        const products = await Product.find();
        res.status(201).json(products);
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.patch('/:id', async(req, res)=> {
    const {id} = req.params;
    try {
        const{} = req.params;
        const {name, description, price, category, images: pictures} = req.body;
        const product = await Product.findByIdAndUpdate(id, {name, description, price, category, pictures});
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message)
    }
})


router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    const {user_id} = req.body;
    try {
        const user = await User.findById(user_id);
        if(!user.isAdmin) return res.status(401).json("You don´t have permission");
        await Product.findByIdAndDelete(id);
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message)
    }
})
router.get(':/id', async(req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        const similar = await Product.find({category: product.category}).limit(5);
        res.status(200).json({product, similar})
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router;