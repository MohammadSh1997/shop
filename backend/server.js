import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import ProductsRouter from "./route/productsRoute"
const port= 9000

const app = new express()
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error=>console.log(error))

app.use("/api/products" , ProductsRouter)

app.get("/api" , (req , res)=> {
    res.send("Hello World")
})

app.listen(port , ()=> {
    console.log(`server running on http://localhost:${port}`)
})
