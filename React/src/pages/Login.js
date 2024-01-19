import classes from "./Login.module.css";
import google from "../icons/google.png";
import facebook from "../icons/facebook.png";
import { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [loginError, setLoginError] = new useState(false);
  const [isLoggedIn, setIsLoggedIn] = new useState(false);
  const idRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    setLoginError(false);

    const data = {
      email: idRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("" + process.env.REACT_APP_API + "login/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        setLoginError(false);
        setIsLoggedIn(true);
      } else setLoginError(true);
    });
    
  }

  return (
    <div className={classes.mainBox}>
      {isLoggedIn ? <Navigate to="/home" replace={true}/> : ''}

      <div className={classes.bodyBox}>
        <div className={classes.element0}>BLOGGER.OP</div>
        <div className={classes.element1}>Where Words Become Stories: Blogging Made Beautiful</div>
        <div className={classes.element2}>BLOGGER.OP</div>
        <div className={classes.element3}>*Terms and Conditions</div>
      </div>
      <div className={classes.intreactionBox}>
        <div className={classes.actionCard}>
          <div className={classes.loginBox}>
            <label className={classes.loginlabel}>Login</label>
            
            <form className={classes.inputForm} onSubmit={submitHandler}>
              <div className={classes.inputFormBlock}>
                <label>Id</label>
                <input type="text"  required ref={idRef} className={loginError? classes.InputFormLoginError: classes.inputFormBlockinput}></input>
              </div>

              <div className={classes.inputFormBlock}>
                <label>Password</label>
                <input type="password" required ref={passwordRef} className={loginError ? classes.InputFormLoginError: classes.inputFormBlockinput}></input>
                <label className={loginError ? classes.loginErrorPromptOn: classes.loginErrorPromptOff}>Please check the credentials</label>
              </div>

              <button className={classes.inputFormButton}>Login</button>
            </form>

            <div className={classes.loginMethods}>
              <img className={classes.icon} src={google} alt=""></img>
              <img className={classes.icon} src={facebook} alt=""></img>
            </div>
          </div>
          <div className={classes.signUp}>
            <div> No account?</div>
            <div className={classes.signUpButton}> <Link to={"/CreateUser"}>Sign Up</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
