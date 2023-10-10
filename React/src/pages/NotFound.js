import { Navigate } from "react-router-dom";
import { useState } from "react";

function NotFound() {
  const [loggedIn, setLoggedIn] = new useState(false);
  return (
    <div>
      NotFound
      {loggedIn && <Navigate to="/home" />}
      {!loggedIn && <Navigate to="/login" />}
    </div>
  );
}
export default NotFound;
