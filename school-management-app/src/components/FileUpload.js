import axios from "axios";
import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
       
        setData(res.data[0]);
        
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("image", file);
    axios
      .post("http://localhost:5000/upload", formdata)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
          <img
        src={`http://localhost:5000/images/` + data.image}
        alt=""
        style={{ width: "500px", height: "500px" }}
      />
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;