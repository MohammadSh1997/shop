import React from 'react'

function Cart(props) {
    return (
        <div className="cart-items">
            <div className="cart-header">
                {props.cartItems.length > 0 ? <p>{props.cartItems.length} in the cart</p>: <p>Cart is empty</p>}
            </div>
            <div className="cart-content">
                {props.cartItems.map((item)=> {
                    return (
                        <div key={item._id} className="cart-item">
                            <img src={item.image} alt="cart" />
                            <div className="item-content">
                                <p className="item-title">{item.title}</p>
                                <div className="item-price">
                                    <p>{item.count} X ${item.price}</p>
                                    <button onClick={()=> props.deleteFromCart(item)} className="item-button">Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                {props.cartItems.length > 0 && 
                    <div className="cart-result">
                        <p> Total : ${props.cartItems.reduce((a,b)=> a + (b.price * b.count)  , 0) }</p>
                        <button> Checkout </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
