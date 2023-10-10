import MainNav from "../components/MainNav";
import classes from "./Create.module.css";
import MoreCategories from "../components/MoreCategories";
import { useState, useEffect, useRef } from "react";
import ChooseCategory from "../components/UI/ChooseCategory";
import bg from "../photos/create.png"
import plane from "../photos/plane22.png"



function Create() {
  const [openMoreCategories, setOpenMoreCategories] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const titleInputRef=useRef();
    const contentInputRef=useRef();


  useEffect(() => {
    if (openMoreCategories) {
      fetch("" + process.env.REACT_APP_API + "category/getall")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAllCategories(data);
        });
    }
  }, [openMoreCategories]);

  function openMoreCategoriesHandler() {
    if (!openMoreCategories) setOpenMoreCategories(()=>{return true});
    else     setOpenMoreCategories(()=>{return false});
  }
  function selectedCategoryhandler(selected_category_id,selected_category_name){
        setSelectedCategory(()=>{return selected_category_id});
        setOpenMoreCategories(()=>{return false});
        setSelectedCategoryName(()=>{return selected_category_name})
  }
  function updateTitle(){
    setTitle(titleInputRef.current.value);
  }
  function updateContent(){
    setContent(contentInputRef.current.value);
}
{<div className={classes.createHeading}>Create a BLOG!</div>}

  return (
    <div className={classes.page}>

        <div className={classes.bgDiv}>
            <div className={classes.bgDiv2}>
                <div >
                <div className={classes.punchLine}>Unleash your thoughts,<br/> One keystroke at a time!</div>
                <img className={classes.backGround} src={bg} alt=""></img>

                </div>
                <img src={plane} className={classes.backGround2}></img>
            </div>
        </div>

      <MainNav></MainNav>
      <div className={classes.mainDiv}>

        <div className={classes.content}>
          <form>

            <div className={classes.contentDiv}>
              <div>Title</div>
              <input ref={titleInputRef} placeholder="Enter Title" required className={classes.inputTitle} onChange={updateTitle}></input>
              <div className={classes.char_count}>{title.length}/100</div>
            </div>

            <div className={classes.contentDiv}>
              <div>MainImage</div>
                <div>
                <button className={classes.button} type="button">                <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                    Select Image</button>

                </div>
            </div>

            <div className={classes.contentDiv}>
              <div>Choose Category</div>
              {selectedCategory==0?    
                <button className={classes.button} onClick={openMoreCategoriesHandler} type="button"> <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Select Category</button>
                :<div className={classes.selectedCategory} onClick={openMoreCategoriesHandler}>{selectedCategoryName}</div>}

              {openMoreCategories ? <ChooseCategory data={allCategories} setter={selectedCategoryhandler}></ChooseCategory> :  "" }
            </div>

            <div className={classes.contentDiv}>
              <div>Content</div>
              <textarea  ref={contentInputRef} placeholder="Enter Content" required className={classes.inputContent} type="text" onChange={updateContent}></textarea>
              <div className={classes.char_count}>{content.length}/1000</div>

            </div>
            <div className={classes.submitButtonDiv}>
                <button type="submit" className={classes.submitButton}>SUBMIT</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default Create;
