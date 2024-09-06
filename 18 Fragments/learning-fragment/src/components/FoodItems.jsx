import { useState } from "react";
import Item from "./Item";

const FoodItems = (props) => {
  let { foodItems } = props;

  let [activeItems, setActiveItems] = useState([])

  let onBuyButton=(item,event)=>{
    let newItems = [...activeItems,item]
    setActiveItems(newItems)
  }


  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          // handleBuyButton={() => console.log(`${item} brought`)}
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton = {(event)=>onBuyButton(item,event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
