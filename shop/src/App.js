import React from "react";
import "./App.css";
import Shop from "./layouts/shop/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Shop />
      </main>
    </div>
  );
}

export default App;
