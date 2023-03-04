import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.00 },
    { name: 'product2', price: 200.00 },
    { name: 'product3', price: 300.00 },
  ]);

  function addProduct() {

  }

  return (
    <div className="app">
      <h1>ReStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>Name: {item.name} - Price: {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
