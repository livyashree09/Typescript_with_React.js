import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <h3>
        {count === 0 
          ? "Your cart is empty" 
          : `You have ${count} item(s) in cart`}
      </h3>
   
      <button onClick={() => setCount(count + 1)}>
        Add Item
      </button>
    </>
  );
};

export default Cart;
