const heading = React.createElement(
    "h1",
    {id : "heading"},
    "Hello from React!", 
    // [ React.createElement("div", { id: child }, "Child in react"),]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
