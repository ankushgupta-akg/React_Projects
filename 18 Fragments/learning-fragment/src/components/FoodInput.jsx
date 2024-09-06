import style from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      onKeyDown={(event) => handleKeyDown(event)}
      placeholder="Enter Food Item Here"
      className={style.foodInput}
    />
  );
};

export default FoodInput;
