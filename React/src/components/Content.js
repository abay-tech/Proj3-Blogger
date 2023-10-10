import classes from "./Content.module.css";
function Content(props) {
  return (
    <div className={classes.mainBox}>
      <div
        className={classes.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={classes.head}>
          <h1>{props.data.title}</h1>
          <svg
            onClick={props.toggle}
            className={classes.closeButton}
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            viewBox="0 -960 960 960"
            width="38"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <h4>{props.data.author_name}</h4>
        <div className={classes.block2}>
          <img
            className={classes.img}
            src={props.data.image_link}
            alt="https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png"
          ></img>
        </div>
        <div>{props.data.content}</div>
      </div>
    </div>
  );
}
export default Content;
