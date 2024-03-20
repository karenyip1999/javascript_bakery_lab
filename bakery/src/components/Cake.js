const Cake = ({name, ingredients, price, rating}) => {


return (
    <>
    <h2>{name}</h2>
    <h3>Ingredients: {ingredients}</h3>
    <h4>Price: {price}</h4>
    <h4>Rating: {rating}</h4>
    </>

)}

export default Cake;