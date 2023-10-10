import classes from "./Recommended.module.css";
import {  useState } from "react";
import Content from "./Content";


function RecommendedContent(props) {

    const [contentPaneOpen, setContentPaneOpen] = useState(false);

    function contentPaneHandler() {
        if (contentPaneOpen) setContentPaneOpen(false);
        else setContentPaneOpen(true);
      }

  return (
    <div
      className={classes.content}
      key={props.content.id}
      onClick={contentPaneHandler}
    >
      <div className={classes.contentHeading}>
        {props.content.title}

        {contentPaneOpen ? (
          <Content toggle={contentPaneHandler} data={props.content}></Content>
        ) : (
          ""
        )}
      </div>
      <hr></hr>
    </div>
  );
}
export default RecommendedContent;
