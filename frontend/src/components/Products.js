import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'

function Products(props) {
    const [modalOpen , setModalOpen] = useState(false)
    const [product,setProduct] = useState(null) 

    const handleModal = (product)=> {
        setModalOpen(true)
        setProduct(product)
    }

    const closeModal = ()=> {
        setModalOpen(false)
        setProduct(null)
    }

    const addFromModal= (product)=> {
        props.addToCart(product)
        setModalOpen(false)
        setProduct(null)
    }
    return (
        <div>
            <Fade bottom cascade>
                <div className="products-items">
                    {props.products.map(product => {
                        return (
                            <div key={product._id} className="item-card">
                                <img src={product.image} onClick={()=>handleModal(product)} alt="product" />
                                <p className="product-title">{product.title}</p>
                                <div className="product-data">
                                    <p className="product-price">${product.price}</p>
                                    <button className="product-button" onClick={()=>props.addToCart(product)} > Add to cart </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fade>
            { modalOpen && (
                <Modal 
                isOpen={true}
                onRequestClose={closeModal}
                ariaHideApp={false}
                >
                    <span className="modal-close" onClick={closeModal}>x</span>
                    <Zoom>
                        <div className="product-modal">
                            <img src={product.image} alt={product.title} />
                            <div className="product-modal-desc">
                                <h2>{product.title}</h2>
                                <p className="modal-product-desc">{product.desc}</p>
                                <p>Available sizes: {product.availableSizes.map((item,index) => {
                                    return (
                                        <span key={index}>
                                            {item}
                                        </span>
                                    )
                                })}</p>
                                <div className="modal-product-price">
                                    <p> ${product.price} </p>
                                    <button onClick={()=>addFromModal(product)}> Add to cart </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
                )
            }
        </div>
    )
}

export default Products
