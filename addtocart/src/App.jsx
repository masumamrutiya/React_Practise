import React, { useState } from 'react';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { id: 1, name: 'Ashwagandha Powder', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqia_93XjOdizrWoQFKBS5Il8HKEEGHHhRw&s' },
  { id: 2, name: 'Triphala Juice', price: 150, image: 'https://krishnaayurved.com/cdn/shop/products/Tri1000_1_540x.jpg?v=1675858992' },
  { id: 3, name: 'Brahmi Capsules', price: 180, image: 'https://bioayurveda.com/cdn/shop/files/2post_23ce5afd-703d-4c18-a095-fbf8baa97583_1280x.jpg?v=1719038406' },
  { id: 4, name: 'Tulsi Drops', price: 100, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Neem Tablets', price: 130, image: 'https://staticin.sadhguru.org/in/pub/media/catalog/product/cache/333a34d5042d21b8c8b06d583d161b35/8/9/8904256300629-pdp-3_2.jpg' },
  { id: 6, name: 'Amla Juice', price: 140, image: 'https://nuttyyogi.com/cdn/shop/products/AmlaConcentrate.png?v=1680676498' },
  { id: 7, name: 'Shilajit Resin', price: 250, image: 'https://images.pexels.com/photos/932273/pexels-photo-932273.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Moringa Powder', price: 160, image: 'https://images.herzindagi.info/image/2019/May/moringa-hair-skin.jpg' },
  { id: 9, name: 'Chyawanprash', price: 200, image: 'https://i0.wp.com/www.edibleroutesshop.com/wp-content/uploads/2021/02/WhatsApp-Image-2022-01-11-at-10.19.59-AM.jpeg?fit=1151%2C1151&ssl=1' }
  // Add more products here...
];

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const removedProduct = updatedCart.splice(index, 1)[0];
    setCart(updatedCart);
    setTotal(total - removedProduct.price);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center mb-4">Ayurvedic Products Store</h1> */}
      <h1 className="text-center mb-4 animate__animated animate__bounceIn">
  Ayurvedic Products Store
</h1>

      
      {/* Toggle Cart Button */}
      <button className="btn btn-info mb-4" onClick={toggleCart}>
        {cartVisible ? 'Hide Cart' : 'Show Cart'} ({cart.length} items)
      </button>

      {/* Product Grid */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm animate__animated animate__fadeInUp">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="btn btn-primary w-50" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart */}
      <div className={`cart-sidebar ${cartVisible ? 'visible' : ''}`}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                <span>{item.name} - ${item.price}</span>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
}

export default App;
