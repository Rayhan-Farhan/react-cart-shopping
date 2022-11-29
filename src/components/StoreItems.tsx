import React from "react";
import { useCart } from "../context/CartContext";
import { formatCur } from "../utils/formatter";
// Props for the Store Items from the JSON data is being defined here
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
};

const StoreItems = ({ id, name, price }: StoreItemProps) => {
  // We are using contextAPI to use the functions for fetching the product id, incresase & decerease items as well as to remove the item
  // The designated id is stored and then we can modify that item based on the item by increasing, decreasing or removing
  const { getItemQuantity, increaseCart, decreaseCart, removeCart } = useCart();
  const items = getItemQuantity(id);
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="nothing">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </a>
        <p className="mb-3 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore
          laudantium animi reiciendis, voluptas reprehenderit saepe sint fugiat
          at nobis dolorum cumque repudiandae. Architecto vel ipsum, possimus
          aspernatur quisquam officiis!
        </p>
        <p className="mb-3 font-normal">
          {/* Formatter is a utility function used to format our currency, this can be found in the utils folder */}
          Price: <span className="text-gray-700">{formatCur(price)}</span>
        </p>
        {items === 0 ? (
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => increaseCart(id)}
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center flex-col" style={{ gap: ".5rem" }}>
            <div
              className="flex items-center justify-center"
              style={{ gap: ".5rem" }}
            >
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => increaseCart(id)}
              >
                +
              </button>
              <div>
                <span className="font-black">{items}</span> in cart
              </div>
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => decreaseCart(id)}
              >
                -
              </button>
            </div>
            <button
              className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700"
              onClick={() => removeCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default StoreItems;
