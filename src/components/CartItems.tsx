import React from "react";
import { useCart } from "../context/CartContext";
import OrderItems from "../api/orderItems.json";
import { formatCur } from "../utils/formatter";

// Creating definitions for props as we used typescript
type CartItemProps = {
  id: number;
  quantity: number;
};

//Props passed into the component
const CartItems = ({ id, quantity }: CartItemProps) => {
  // Using context to get the removeCart function 
  const { removeCart } = useCart();
  //Fetching the data to be shown in our checkout payment
  const item = OrderItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
    {/* Created divs to render the items we added from the store and displayed here with the props data */}
    {/* We are using react fragments to use multiple child components */}
      <div className="m-auto">
        <div className="flex px-10 justify-center items-center p-5 mb-3 text-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 d">
          {item.name} <span className="ml-2">Quantity: {quantity}</span>
          <div className="ml-2">Price: {formatCur(item.price)}</div>
          <div className="ml-2"> Total:{formatCur(item.price * quantity)}</div>
          <button
            className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 ml-5"
            onClick={() => removeCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
