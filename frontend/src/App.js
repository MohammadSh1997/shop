import React , {useState , useEffect} from 'react';
import data from "./data.json"
import Products from './components/Products';
import './App.css';
import Filter from './components/Filter';
import Cart from './components/Cart';

function App() {
  const [products , setProducts] = useState(data.products)
  const [size , setSize] = useState("")
  const [order , setOrder] = useState("")
  const [cart , setCart] = useState([])

  useEffect(() => {
      setProducts([...products].sort((a,b)=>a._id < b._id ? 1 : -1))
  }, [])

  const addToCart = (product)=> {
    let cartItems = cart.slice()
    let alreadyInCart = false

    cartItems.forEach(item => {
      if (item._id === product._id) {
        alreadyInCart= true
        item.count++
      }    
    })

    if (!alreadyInCart) {
      cartItems.push({...product , count: 1})
    }
    setCart(cartItems)
  }

  const deleteFromCart = (item)=> {
    let newCart = cart.filter(el=> el._id !== item._id)
    setCart(newCart)
  }

  const handleOrder = (e) => {
    setOrder(e.target.value)
    if (e.target.value === "high") {
      products.sort((a,b)=> a.price < b.price ? 1 : -1)
    } else if (e.target.value === "low") {
      products.sort((a,b)=> a.price > b.price ? 1 : -1)
    } else if (e.target.value === "latest") {
      products.sort((a,b)=> a._id < b._id ? 1 : -1)
    }
  }

  const handleFilter = (e) => {
    setSize(e.target.value)
    if (e.target.value === "none") {
      setProducts(data.products)
      setSize("")
    } else {
      let filtered = data.products.filter(item => item.availableSizes.indexOf(e.target.value)>=0)
      setProducts(filtered)
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h2>React Card Shopping</h2>
        <ul className="navbar">
          <li>Home</li>
        </ul>
      </header>
      <main className="main">
        <div className="content">
          <div className="products">
            <Filter
              count={products.length}
              size={size}
              order={order}
              handleFilter={handleFilter}
              handleOrder={handleOrder}
            />
            <Products products= {products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cart}
              deleteFromCart={deleteFromCart}
            />
          </div>
        </div>
      </main>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
