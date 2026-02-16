import { useReducer } from "react";

const initialState = {
  products: [],
  totalAmount: 0,
  totalQuantity: 0
};

const reducer = (state: any, action: any) => {
  switch (action.type) {

    case "ADD_PRODUCT": {
      const existingProduct = state.products.find(
        (item: any) => item.id === action.payload.id
      );

      let updatedProducts;

      if (existingProduct) {
        updatedProducts = state.products.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedProducts = [
          ...state.products,
          { ...action.payload, quantity: 1 }
        ];
      }

      return {
        ...state,
        products: updatedProducts,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price
      };
    }

    case "REMOVE_PRODUCT": {
      const productToRemove = state.products.find(
        (item: any) => item.id === action.payload.id
      );

      if (!productToRemove) return state;

      return {
        ...state,
        products: state.products.filter(
          (item: any) => item.id !== action.payload.id
        ),
        totalQuantity: state.totalQuantity - productToRemove.quantity,
        totalAmount:
          state.totalAmount -
          productToRemove.price * productToRemove.quantity
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export default function CartReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sampleProduct = {
    id: 1,
    name: "Laptop",
    price: 50000
  };

  return (
    <>
      <h2>Cart</h2>

      <p>Total Quantity: {state.totalQuantity}</p>
      <p>Total Amount: ₹{state.totalAmount}</p>

      <button onClick={() => dispatch({ type: "ADD_PRODUCT", payload: sampleProduct })}>
        Add product
      </button>

      <button onClick={() => dispatch({ type: "REMOVE_PRODUCT", payload: sampleProduct })}>
        Remove product
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear cart
      </button>
    </>
  );
}
