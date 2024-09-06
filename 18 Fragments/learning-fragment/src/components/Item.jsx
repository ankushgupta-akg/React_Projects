// import styles from "./Item.css";
import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButton, bought }) => {
  // let foodItems =["Dal","Green Vegitables","Roti","Salad","Milk","Ghee"];
  const handleBuyButtonClicked = (event) => {
    console.log(`${foodItem} being bought`);
    console.log(event);
  };
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        onClick={handleBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
