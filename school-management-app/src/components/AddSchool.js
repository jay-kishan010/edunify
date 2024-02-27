// AddSchool.js

import React, { useEffect, useState } from "react";
import axios from "axios";


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBSelect,
} from "mdb-react-ui-kit";


const AddSchool = () => {
  const [name, setName] = useState("");
  const [board, setBoard] = useState("");
  const [location, setLocation] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [file, setFile] = useState();
  const [data, setData] = useState([]);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schools/")
      .then((res) => {
       
        setData(res.data[0]);
        
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpload = () => {
    const formdata = new FormData();
 formdata.append("name", name);
 formdata.append("board", board);
 formdata.append("location", location);
 formdata.append("establishedYear", establishedYear);


    formdata.append("image", file);
    axios
      .post("http://localhost:5000/api/schools", formdata)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeded");
          
        //   alert("Image Uploaded Successfully!");
          alert("Successfully added school!");
          setName("");
          setBoard("");
          setLocation("");
          setEstablishedYear("");
          
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };



  return (
    <div>

      <MDBContainer
        style={{ width: "70%" }}
        className="d-flex align-items-center justify-content-center bg-image mb-4"
        fluid
      >
        <MDBRow className="d-flex justify-content-center align-items-center mb-4 h-100">
          <MDBCol>
            <form onSubmit={handleUpload}>
              <MDBCard className="my-4">
                <MDBRow className="g-0">
                  <MDBCol md="6" className="d-none d-md-block p-4 ">
                     <div className="container">
          <img className="mb-4"
        src={`http://localhost:5000/images/` + data}
        alt=""
        style={{ width: "500px", height: "500px" }}
      />
      <input for="img" type="file" onChange={handleFile} id="img" />
      {/* <button  className="btn btn-success" id="img">Upload</button> */}
    </div>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                      <h1 className="mb-5 text-uppercase fw-bold">
                        Add School
                      </h1>

                      <MDBInput
                        wrapperClass="mb-6"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        size="lg"
                        id="form3"
                      />
                      <MDBInput
                        wrapperClass="mb-6"
                        type="text"
                        placeholder="Board"
                        value={board}
                        onChange={(e) => setBoard(e.target.value)}
                        label="Board"
                        size="lg"
                        id="form3"
                      />

                     

                      <MDBInput
                        wrapperClass="mb-6"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        label="Location"
                        size="lg"
                        id="form4"
                      />
                      <MDBInput
                        wrapperClass="mb-6"
                        type="text"
                        placeholder="Established Year"
                        value={establishedYear}
                        onChange={(e) => setEstablishedYear(e.target.value)}
                        label="Established Year"
                        size="lg"
                        id="form5"
                      />
                      {/* <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'/> */}

                      <div className="d-flex justify-content-end pt-3 align-text-bottom" style={{"position": "absolute","right":"0","bottom": "0","margin":"50px"}}>
                        <MDBBtn color="light" size="lg">
                          Reset all
                        </MDBBtn>
                        <button
                          type="submit"
                          className="btn btn-warning ms-2 "
                          color="warning"
                          size="lg"
                        >
                          ADD SCHOOL
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AddSchool;
