import classes from "./Categories.module.css";
import { useContext, useEffect, useState } from "react";
import MoreCategories from "./MoreCategories";
import {feedContext} from "../App.js"


function Categories() {
  const [topCategories, setTopCategories] = useState([]);
  const [isMoreActive, setIsMoreActive] = useState(false);

  const {category,categorySettor}=useContext(feedContext);

  useEffect(() => {
    fetch("" + process.env.REACT_APP_API + "category/gettop")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopCategories(data);
      });

  }, []);
  function MoreCategoriesHandler() {
    if (isMoreActive) setIsMoreActive(false);
    else setIsMoreActive(true);
  }

  return (
    <div className={classes.mainBody}>
      <h3 className={classes.heading}>Top Categories</h3>
      <input placeholder="Search" className={classes.searchBox}></input>
      {topCategories.map((categories) => {
        return (
          <div 
          
          className={category == categories.id ? classes.selectedCategory : classes.categoryDataBlock}

          
          key={categories.id} onClick={()=>categorySettor(categories.id)}>
            <img
              src={categories.image_link}
              alt=""
              className={classes.categoryImage}
            ></img>
            <div>{categories.category_name}</div>
          </div>
        );
      })}
      <div className={classes.moreCategories} onClick={MoreCategoriesHandler}>
        More...
      </div>
      {isMoreActive ? (
        <MoreCategories toggleMoreCategories={MoreCategoriesHandler} />
      ) : (
        ""
      )}
    </div>
  );
}
export default Categories;
