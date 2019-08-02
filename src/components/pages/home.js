import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="hero-section">
        <div className="top-heading">
          <h1>Them Tasty Doughnuts</h1>
        </div>

        <div className="bottom-heading">
          <h3>For Eating</h3>
        </div>
      </div>

      <div className="popular-doughnuts-wrapper">
        <div className="doughnuts-wrapper">
          <h1>These are our Popular Menu Items</h1>

          <div className="menu-items">
            <img src="" alt="menu item" />

            <div className="buttons-wrapper">
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
