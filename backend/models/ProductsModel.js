import mongoose from "mongoose"

const ProductSchema = mongoose.Schema({
    title : {type: String , required: true},
    desc: {type: String , required: true},
    image: String,
    availableSizes: [String]
})

const ProductModel = mongoose.model("Products" , ProductSchema)
export default ProductModel
