import { useEffect, useState } from "react"
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    // setProducts([...products, {name: 'product3', price: 300.00}])
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        description: 'test',
        price: (prevState.length * 100) + 100,
        pictureUrl: 'https://picsum.photo/200',
        type: 'test',
        brand: 'test',
        quantityInStock: 100,
      }])
  }

  return (
    <div>
      <h1 style={{ color: 'red' }}>Re-store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>

      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
