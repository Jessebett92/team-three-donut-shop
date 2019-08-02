import React from "react";

const DoughnutItem = () => {
  return (
    <div className="doughnut-item-wrapper">
      <div className="main-product-wrapper">
        <div className="product-of-the-day">
          <h1>Product</h1>
        </div>

        <div className="product-info-wrapper">
          <div className="buy-add-to-cart-wrapper">
            <h1>Product Name</h1>
            <button>Buy</button>
            <button>Add to Cart</button>
          </div>
          <div className="product-description">
            <div className="image-wrapper">
              <img src="" alt="Product" className="product-image-of-the-day" />
            </div>
            <h1>description lorem ipsum other latin words.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutItem;
