export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
    
     ingredients.map((ingredient, i) => (
    <li key={i}>{ingredient}</li>
    ));
     */
    
    const ingredientsArray = ingredients.map(
        ingredient => (<li key={ingredient}>{ingredient}</li>)
    )

    function handleSubmit(event){
        event.preventDefault()
        console.log("Form Submitted")
        const formData =  new  FormData (event.currentTargrt)
        const newIngredient = formData.get("ingredient")
        console.log("newIngredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    /*
    When the user clicks the button or presses Enter, the browser triggers a submit event.

    React calls your handleSubmit function in response
    --------------
    event.currentTarget points to the <form> element (ensures proper typing and safety in React) 
    reacttraining.com

    new FormData(...) creates an object that contains all form values keyed by their name attributes.

    👉 Important: Your <input> must have a name="ingredient" for it to show up in FormData
    -------------
    .get("ingredient") fetches the value of the input field named "ingredient".

    This gives you the text the user typed in (e.g., "oregano").
    */

    return (
    
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsArray}
            </ul>
        </main>
    )
}