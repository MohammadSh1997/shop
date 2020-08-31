import React , {useState} from 'react';
import data from "./data.json"
import Products from './components/Products';
import './App.css';

function App() {
  const [products] = useState(data.products)
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
            <Products products= {products} />
          </div>
          <div className="cart">this is cart</div>
        </div>
      </main>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
