import { useRef, useState } from "react";

export default function Playground() {
  const [image, setImage] = new useState(null);
  const [sendImage, setSendImage] = new useState(null);
  const [imageId, setImageId] = new useState(1);

  const imageIdRef =useRef();

  function Reciever() {
   
    setImage(null);

    fetch("" + process.env.REACT_APP_API + "feed/recieve?id=" + imageId)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("Reciever fin")
        setImage(data.image_data)
      })      
  }
  function Uploader(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      const base64Image = reader.result;
      setSendImage(base64Image);
    };
  }
  function Sender() {
    const imageEncoding = sendImage.split(",")[1];
    // console.log(imageEncoding);
    const data = {
      image_id: 2,
      image_data: imageEncoding,
      file_name: "file2",
      description: "no",
    };

    fetch("" + process.env.REACT_APP_API + "feed/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Sender fin");
    });
  }

  function setter(){
    setImageId(imageIdRef.current.value)
  }
  //base64 images can be directly shown
  return (
    <div>
      <h2>Playground</h2>
      <hr />
      <input ref={imageIdRef} placeholder="give id" onChange={setter}></input>
      <button onClick={Reciever}>Press to recieve</button>
      <img src={`data:image/jpeg;base64,${image}`} style={{ width: "500px", borderRadius:"8px",margin:"0 5px"}} />
      <hr />
      <input onChange={Uploader} type="file" accept="image/*"></input>
      <img src={sendImage} style={{ width: "500px", borderRadius:"8px",margin:"0 5px"}} />
      <button onClick={Sender}> SEND THEM IMAGE</button>
    </div>
  );
}
