import React from "react";

function ProductModal({ product, onClose }) {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out opacity-100"
    >
      <div
        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ease-in-out scale-100"
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600 transition-transform duration-300 ease-in-out scale-150 hover:scale-200"
          onClick={onClose}
        >
          <i className="bx bx-x"></i>
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="h-32 sm:h-40 mx-auto mb-4"
        />
        <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center">
          {product.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 text-justify">
          {product.description}
        </p>
        <p className="text-sm sm:text-lg font-semibold mb-2">
          Price: ${product.price}
        </p>
        <p className="text-sm sm:text-gray-500">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
