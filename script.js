// const root = document.getElementById("root");

// const heading = document.createElement("h1");

// heading.innerHTML = "Hello world";

// root.appendChild(heading);

import React from "react";
import ReactDOM from "react-dom";

const Heading2 = () => <h2>Hello boy h2</h2>;

const Heading = () => (
  <div>
    <Heading2 />
    <h1>Hello boy</h1>
  </div>
);
//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
