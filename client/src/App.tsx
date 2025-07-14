import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error('[FETCH ERROR]', err));
  }, []);

  return (
    <div>
      <h1>🛒 Inventory</h1>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} – {prod.quantity} units – ${prod.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
