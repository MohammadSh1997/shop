import React from 'react'

function Products(props) {
    return (
        <div className="products-items">
            {props.products.map(product => {
                return (
                    <div key={product._id} className="item-card">
                        <img src={product.image} alt="product" />
                        <p className="product-title">{product.title}</p>
                        <div className="product-data">
                            <p className="product-price">${product.price}</p>
                            <button className="product-button" onClick={()=>props.addToCart(product)} > Add to cart </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
