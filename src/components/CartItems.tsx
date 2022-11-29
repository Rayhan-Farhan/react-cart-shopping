import React from "react";
import { useCart } from "../context/CartContext";
import OrderItems from "../api/orderItems.json";
import { formatCur } from "../utils/formatter";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItems = ({ id, quantity }: CartItemProps) => {
  const { removeCart } = useCart();
  const item = OrderItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
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
