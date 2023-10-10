import { createContext, useContext, useState } from "react";
import Categories from "../components/Categories";
import Feed from "../components/Feed";
import MainNav from "../components/MainNav";
import Recommended from "../components/Recommended";
import classes from "./Home.module.css";



function Home() {
  

  return (
    
      <div className={classes.home}>
        <MainNav></MainNav>

        <div className={classes.content}>
          <Categories></Categories>
          <Feed></Feed>
          <Recommended></Recommended>
        </div>
      </div>
  );
}
export default Home;
