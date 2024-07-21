// const root = document.getElementById("root");

// const heading = document.createElement("h1");

// heading.innerHTML = "Hello world";

// root.appendChild(heading);

const head = React.createElement(
  "h1",
  { id: "heading", xyz: "cbn" },
  "hello world "
);
const head2 = React.createElement(
  "h2",
  { id: "headin2", xyz: "cb2" },
  "heloo world 1"
);
const head3 = React.createElement("h3", { id: "headin3", xyz: "cb2" }, "hello world 3");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [head, head2, head3]),
  React.createElement("div", { id: "child" }, [head, head2]),
]);
console.log(parent);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
