import express from "express"
import Product from "../models/ProductsModel"
const router = express.Router()

router.get("/" , async(req , res)=> {
    res.send( await Product.find({}))
})

router.post("/" , async (req , res)=> {
    console.log(req.body)
    const product = new Product({
        title: req.body.title,
        image: req.body.image,
        desc: req.body.desc,
        price: req.body.price,
        availableSizes: req.body.availableSizes,
    })
    const newProduct = await product.save()
    if (newProduct) {
        return res.status(201).send({msg: "product created" , data: newProduct})
    }
    return res.status(500).send({msg: "product not created"})
})

router.delete("/:id" , async (req , res)=> {
    const id = req.params.id
    const product = await Product.findOne({_id: id})
    if (product) {
        await product.remove()
        return res.send({msg: "product deleted"})
    }
    res.status(403).send({msg: "Something error"})
})

export default router