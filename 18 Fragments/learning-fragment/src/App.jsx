import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems =[]÷
  // if(foodItems.length == 0){
  //   return <h3>I am still hungery</h3>
  // }
  // let emptyMessage = foodItems.length == 0 ? <h3>I am still hungery</h3>:null
  // let textStateArr = useState("Food item entered by user")
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow , setTextState] = useState("Food item entered by user")

  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegitables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ]);
  // let [foodItems, setFoodItems] = useState([
   
  // ]);

  // console.log(textToShow);

  const onKeyDown = (event) => {
    // setTextState(event.target.value);
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems)
      event.target.value = ''
      console.log(newFoodItem);
      
    }
    // console.log(event);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          dolores similique, tenetur ratione obcaecati, saepe eum numquam
          veritatis dignissimos, iste sed fuga a magni. Labore neque molestias
          vero iusto perferendis.
        </p>
      </Container>
    </>
  );
}

export default App;
