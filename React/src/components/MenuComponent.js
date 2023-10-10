import classes from "./MenuComponent.module.css";
function MenuComponent(props) {
  return (
   
      <div className={classes.menuComponent} onMouseLeave={props.toggleHandler}>
        <div>Profile</div>
        <div>Settings</div>
        <hr></hr>
        <div>Logout</div>

      </div>
    
  );
}
export default MenuComponent;
