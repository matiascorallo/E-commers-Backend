const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: 'davaelph6',
    api_key: '464258852352442',
    api_secret: 'RyoS3U9ySo1tYg9H83L53iLOEfg'
})

router.delete('/:public_id', async (req, res) => {
    const { public_id } = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router;
