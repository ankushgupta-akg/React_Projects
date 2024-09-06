let ErrorMerssage = (props) => {
  let {foodItems} = props
  return <>{foodItems.length == 0 && <h3>I am still hungery.</h3>}</>;
};
export default ErrorMerssage;
