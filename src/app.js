// const divElement = React.createElement('h1', [] , 'Hello World');

// const divElement = React.createElement('h1', [] , 'Hello World');


// const subDivElement = (
//     <div>Hi React</div>
// )


// console.log(subDivElement)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //rendering heading inside root
// root.render(subDivElement);


const jsxHeading = (
    <h1 id="jsxheading" style="color:red;">
      React is {5 + 5} times better with JSX 🚀
    </h1>
  );
  console.log(jsxHeading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(jsxHeading);

