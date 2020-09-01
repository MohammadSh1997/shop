import React, { useState } from 'react'

function Cart(props) {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [address , setAddress] = useState("")
    const [checked , setChecked] = useState(false)

    const handleSubmit= (e)=> {
        e.preventDefault()
        props.createOrder({name , email , address})
    }

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
                        <button onClick={()=> setChecked(true) }> Checkout </button>
                    </div>
                }
            </div>
            { checked &&
                <div className="checking-form">
                    <form>
                        <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                        <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                        <input type="text" id="address" name="address" onChange={(e)=> setAddress(e.target.value)} placeholder="Address" />
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Cart
