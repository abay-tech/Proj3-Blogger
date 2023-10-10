import MainNav from "../components/MainNav";
import classes from "./Favorites.module.css";
import { useContext, useEffect, useState } from "react";
import { feedContext } from "../App.js";
import WaveLoading from "../components/UI/WaveLoading";
import FeedComponent from "../components/FeedComponent";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(feedContext);
  const [favoriteData, setFavoriteData] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [isError,setIsError]=useState(false);


  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(process.env.REACT_APP_API+"feed/feedData?feedIds="+fillFetch())//use favorites here
      .then((response) => {
        setIsLoading(false);

        return response.json();
      })
      .then((data) => {
        reorderResult(data);

      }).catch(()=>{setIsError(true)}); 

  }, []);

  function fillFetch(){

    var s="";
    for(var i=0;i<favorites.length-1;i++){
        s+=favorites[i]+","
    }
    s+=favorites[i];
    return s;
  }

  function reorderResult(datas){
    var i,j;
    var x=[];
    for(i=0;i<favorites.length;i++)
    for(j=0;j<datas.length;j++){
        if(favorites[i]==datas[j].id){
            x.push(datas[j])
        } 
    }
    setFavoriteData(x)
  }




  return (
    <div>
      <MainNav></MainNav>
      <div className={classes.loaderLayer}>
        {isLoading?<WaveLoading></WaveLoading>:""}
        {isError?<div>Sorry,no data found</div>:""}
      </div>
      <div className={classes.mainDiv}>
        {favoriteData.map((data) => {
          return <FeedComponent feedData={data} key={data.id} favorites={true}></FeedComponent>;
        })}
      </div>
    </div>
  );
}
