import React from 'react';
import './App.css';

function App() {
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
          {/* test */}
          <div className="products">this is products</div>
          <div className="cart">this is cart</div>
        </div>
      </main>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
