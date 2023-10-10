import classes from "./ChooseCategory.module.css";
export default function ChooseCategory(props) {
  return (
    <div className={classes.categorylist}>
      {props.data.map((category) => {
        return(
        <div key={category.id} className={classes.item} onClick={()=>{props.setter(category.id,category.category_name)}}>
          <div>{category.category_name}</div>
        </div>)
      })}
    </div>
  );
}
