import { useState,useContext } from "react";
import classes from "./MainNav.module.css";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";
import {feedContext} from "../App.js"
function MainNav() {
    const [ismenuOpen,setIsMenuOpen]=useState(false);
    const {category,categorySettor}=useContext(feedContext);


    function menuHandler(){
        if(ismenuOpen)setIsMenuOpen(false);
        else setIsMenuOpen(true);
    }



  return (
    <div className={classes.mainNav}>
      <div className={classes.bloggerop}>BLOGGER.OP</div>

      <div className={classes.centreOptions}>
        <div className={classes.centreOptionsSet1} ><Link to={"/home"} onClick={()=>categorySettor(0)}>Home</Link></div>
        <div className={classes.centreOptionsSet1}><Link to={"/favorites"}>Favorites</Link></div>
        <div className={classes.centreOptionsSet1} ><Link to={"/create"}>Create</Link></div>
        <div className={classes.centreOptionsSet2}>
          <input  className={classes.searchBar} placeholder="Search"></input>
          <svg  className={classes.searchIcon}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M799.326-105.13 534.319-370.087q-30.71 25.264-71.832 39.034-41.122 13.77-86.006 13.77-114.769 0-192.843-78.168-78.073-78.168-78.073-190.358 0-112.191 78.168-190.311 78.169-78.119 190.359-78.119 112.191 0 190.31 78.154 78.12 78.154 78.12 190.474 0 44.328-13.381 84.111-13.38 39.783-40.663 75.304l266.957 264.957-56.109 56.109ZM374.529-394.587q80.372 0 135.53-55.536t55.158-135.539q0-80.003-55.105-135.638-55.105-55.635-135.494-55.635-81.223 0-136.486 55.635-55.262 55.635-55.262 135.638 0 80.003 55.227 135.539 55.228 55.536 136.432 55.536Z"/></svg>

        </div>
      </div>
      <div className={ismenuOpen?classes.menuIconHolderActive:classes.menuIconHolder} onClick={menuHandler} >
        <svg
          className={classes.menuIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="35"
        >
          <path d="M102.804-224.782v-77.544h754.631v77.544H102.804Zm0-216.827v-77.304h754.631v77.304H102.804Zm0-216.826v-77.543h754.631v77.543H102.804Z" />
        </svg>

      </div>
      {ismenuOpen?<MenuComponent toggleHandler={menuHandler}/>:''}

    </div>
  );
}
export default MainNav;
