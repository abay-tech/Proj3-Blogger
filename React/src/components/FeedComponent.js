import classes from "./FeedComponent.module.css";
import img1 from "../photos/img3.jpg";
import Content from "./Content";
import { useState,useContext, useEffect } from "react";
import { feedContext } from "../App.js";

function FeedComponent(props) {
  const [contentPaneOpen, setContentPaneOpen] = useState(false);
  const [isBookMarked,setIsBookMarked]=useState(false);
  const { favorites,setFavorites } = useContext(feedContext);


  function contentPaneHandler() {
    if (contentPaneOpen) setContentPaneOpen(false);
    else setContentPaneOpen(true);
  }




  function bookMarkToggler(id){
    if(favorites.includes(id)){
      var filtered=favorites.filter((value)=>{return value!=id})
      console.log(filtered)
      setIsBookMarked(false);
      setFavorites(filtered);
    }
    else {
      var filtered=favorites;
      filtered.push(id);
      console.log(filtered)
      setIsBookMarked(true);
      setFavorites(filtered);

    }    
   
  }

useEffect(()=>{
  if(favorites.includes(props.feedData.id))       setIsBookMarked(true);
  else       setIsBookMarked(false);
  console.log(favorites)

},[])


  return (
    <div  className={props.favorites?classes.favoriteBox:classes.mainBox} onClick={contentPaneHandler}>
      
      <div  className={classes.bookMarks} onClick={(e)=>{  e.stopPropagation();return bookMarkToggler(props.feedData.id);}}>
      {isBookMarked
      ?<svg  className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/></svg>
      :<svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>}
      </div>
      <div>

      {contentPaneOpen ? (
        <Content toggle={contentPaneHandler} data={props.feedData} ></Content>
      ) : ("")}
        </div>
      <img
        className={classes.img}
        src={props.feedData.image_link}
        alt={img1}
      ></img>
      <div className={classes.textData}>
        <h3 className={classes.heading}>{props.feedData.title}</h3>
        <h5 className={classes.author}>{props.feedData.author_name}</h5>
      </div>
    </div>
  );
}
export default FeedComponent;
