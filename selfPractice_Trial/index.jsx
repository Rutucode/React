import { createRoot } from "react-dom/client";

// Create Root 
const root = createRoot(document.getElementById('#root'));
//Reder markup
root.render(<h1>Self React Practice </h1>)



createRoot(document.getElementById("root-two")).render(
    <ul>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>React has a pretty cool logo</li>
    </ul>
)
