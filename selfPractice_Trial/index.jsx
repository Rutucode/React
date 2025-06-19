// import { createRoot } from "react-dom/client";
// import { createElement } from "react";

// // Create Root 
// const root = createRoot(document.getElementById('#root'));
// //Reder markup
// //root.render(<h1>Self React Practice </h1>)
// const reactElement = createElement("h1", null, "Hello form createElement!")
// console.log(reactElement)
// root.render(reactElement
// )


// createRoot(document.getElementById("root-two")).render(
//     <ul>
//         <li>Super popular JS library</li>
//         <li>Will help me be even more employable</li>
//         <li>React has a pretty cool logo</li>
//     </ul>
// )

const heading = React.createElement("h1", {}, "Hello from React!", [React.createElement("div", {id: child}, "Child in react")])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.Render(heading)
