// src/components/MyStore.jsx
import React from 'react';
import { useStore } from '../contexts/StoreContext';
import { observer } from 'mobx-react-lite';

const MyStore = observer(() => {
  const store = useStore();

  const handleAddItem = (item) => {
    // Add item to the cart (implement your own logic here)
  };

  const handlePlaceOrder = () => {
    // Place the order (implement your own logic here)
    alert('Order placed!');
  };

  return (
    <div className="my-store">
      <h2>My Store</h2>
      <ul>
        {store.items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleAddItem(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
});

export default MyStore;
