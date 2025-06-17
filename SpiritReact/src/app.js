// const divElement = React.createElement('h1', [] , 'Hello World');

// const divElement = React.createElement('h1', [] , 'Hello World');


// const subDivElement = (
//     <div>Hi React</div>
// )


// console.log(subDivElement)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //rendering heading inside root
// root.render(subDivElement);


import React from "react";
import ReactDOM from "react-dom/client";
import Applayout from "./components/Applayout";


// const jsxHeading = (
//     <h1 id="jsxheading" className="red">
//       React is {5 + 5} times better with JSX 🚀
//     </h1>
//   );

  //console.log(jsxHeading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<Applayout />);

