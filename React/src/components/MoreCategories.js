import { useEffect, useState, useContext } from "react";
import classes from "./MoreCategories.module.css";
import { feedContext } from "../App.js";

function MoreCategories(props) {
  const [allCategories, setAllCategories] = new useState([]);
  const { category, categorySettor } = useContext(feedContext);

  useEffect(() => {
    fetch("" + process.env.REACT_APP_API + "category/getall")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllCategories(data);
      });
  }, []);

  return (
    <div className={classes.overlay} onClick={props.toggleMoreCategories}>
      <div
        className={classes.card}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={classes.topDiv}>
          <h3 className={classes.heading}>CHOOSE CATEGORY</h3>

          <div onClick={props.toggleMoreCategories}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>

        <div className={classes.allCategories}>
          {allCategories.map((ctg) => {
            return (
              <div
                key={ctg.id}
                onClick={() => categorySettor(ctg.id)}
                className={category == ctg.id ? classes.selectedCategory : classes.notSelectedCategory}
              >
                {ctg.category_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MoreCategories;
