// AddSchool.js

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';


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
    MDBSelect
  }
  from 'mdb-react-ui-kit';
import FileUpload from './FileUpload';

const AddSchool = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [establishedYear, setEstablishedYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/schools', {
        name,
        location,
        establishedYear
      });
      // Reset form fields after successful submission
      setName('');
      setLocation('');
      setEstablishedYear('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar/>
      {/* <h2>Add School</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Established Year"
          value={establishedYear}
          onChange={(e) => setEstablishedYear(e.target.value)}
        />
        <button type="submit">Add School</button>
      </form> */}

{/* add school  */}


<MDBContainer style={{ width: "70%" }} className='d-flex align-items-center justify-content-center bg-image'  fluid >

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol>
  <form onSubmit={handleSubmit}>
    <MDBCard className='my-4'>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/> */}
        <FileUpload/>
      
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5 text-uppercase fw-bold">Add School</h3>

     

            <MDBInput wrapperClass='mb-4' type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} label='Name' size='lg' id='form3'/>

          

            <MDBRow>

              

              <MDBCol md='6'>
               
              </MDBCol>

            </MDBRow>

            <MDBInput wrapperClass='mb-4' type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)} label='Location' size='lg' id='form4' />
            <MDBInput wrapperClass='mb-4'
             type="text"
          placeholder="Established Year"
          value={establishedYear}
          onChange={(e) => setEstablishedYear(e.target.value)}
             label='Established Year' size='lg' id='form5' />
            {/* <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'/> */}

            <div className="d-flex justify-content-end pt-3">
              <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
              <button type="submit" className='ms-2' color='warning' size='lg'>ADD SCHOOL</button>
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

