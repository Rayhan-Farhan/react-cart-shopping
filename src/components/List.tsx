import React from "react";
import Customers from "../api/data.json";

const List = () => {
  return (
    <>
      <div className="text-3xl text-center font-semibold underline mb-5 mt-5">
        Customer
      </div>
      {/* Fetching the customer data from the json data */}
      {Customers &&
        Customers.map((item) => {
          return (
            <div
              className="flex px-10 justify-center items-center p-5 mb-3 text-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 d"
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
    </>
  );
};

export default List;
