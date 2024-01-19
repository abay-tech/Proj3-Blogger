import { useState, useEffect, useRef, useContext } from "react";
import classes from "./Feed.module.css";
import FeedComponent from "./FeedComponent";
import WaveLoading from "./UI/WaveLoading";
import worry from "../icons/worry.png";
import { feedContext } from "../App.js";

function Feed() {
  const [FeedData, setFeedData] = useState([]);
  const [addFeed, setAddFeed] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [initial, setInitial] = useState(true);
 const [changeOver,setChangeOver]=useState(false)

  const { category, categorySettor,favorites,setFavorites } = useContext(feedContext);

  const elementRef = useRef(null);

  useEffect(() => {
    if (hasMore) {
      setIsLoading(true);
      fetch("" +process.env.REACT_APP_API +"feed/feedlist?skipnum=" +addFeed +"&category_id=" +category)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length < 5) {
            setHasMore(() => {
              return false;
            });
          }
          const merged = [...FeedData, ...data];
          setFeedData(merged);
          setIsLoading(false);
          setInitial(() => {
            return false;
          }); //for triggering the second usestate(its now triggering on rendering)
        }); 
    }
    setChangeOver(false);
  }, [addFeed,changeOver]);

  useEffect(() => {
    if (!initial &&!isLoading) {
      setHasMore(true);
      setFeedData([]);
      setAddFeed(0);
      setChangeOver(true);
    }
  }, [category]);

  //only when the "initial" changes, the IntersectionObserver useEffect will be active and
  //observing changes.

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !initial) {
          setAddFeed((prevState) => {
            return prevState + 5;
          });
        }
      },
      { threshold: 1 }
    );
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [initial]);

  useEffect(()=>{

  },[favorites])

 

  return (
    <div className={classes.mainBody}>
      {FeedData.map((data) => {
        return <FeedComponent feedData={data} key={data.id} ></FeedComponent>;
      })}
      <div className={classes.finalBlock}>
        <div ref={elementRef} className={classes.lastElement}></div>

        {isLoading ? (
          <WaveLoading></WaveLoading>
        ) : (
          <div>
            {hasMore ? (
              ""
            ) : (
              <div className={classes.lastElement}>
                <img
                  src={worry}
                  alt="https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png"
                  className={classes.worryImage}
                ></img>
                <div>SEEMS LIKE YOU REACHED THE END</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Feed;
