import classes from "./Recommended.module.css";
import { useEffect, useState } from "react";

import RecommendedContent from "./RecommendedContent";

function Recommended() {
  const [topContent, setTopContent] = useState([]);


  useEffect(() => {
    fetch("" + process.env.REACT_APP_API + "feed/topfeed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopContent(data);
      });
  }, []);

  return (
    <div className={classes.mainBody}>
      <div>
        <h3 className={classes.heading}>Top Content</h3>
        {topContent.map((content) => {
          return (
            <RecommendedContent  content={content} key={content.id}></RecommendedContent>
          );
        })}
      </div>
    </div>
  );
}
export default Recommended;
