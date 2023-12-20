import { useState } from "react";

export default function Playground() {
    const [image,setImage]=new useState(null);
  function Reciever() {
    fetch("" + process.env.REACT_APP_API + "feed/recieve")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setImage(data.image_data)
    });
  }
//base64 images can be directly shown
  return (
    <div>
      <h2>Playground</h2>
      <button onClick={Reciever}>Press to recieve</button>
      <img src={`data:image/jpeg;base64,${image}`} />
    </div>
  );
}
