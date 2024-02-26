

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCol,
    MDBRow,
    MDBContainer
  } from 'mdb-react-ui-kit';
const DisplaySchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
     <Navbar/>
      <h2>Schools</h2>
      <MDBContainer fluid className='m-3'>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>


  
      <MDBCard  alignment='center'>
        
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {schools.map((school) => (
       

          <MDBCol key={school.id}>
        <MDBCard >
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle><strong>Name:</strong>{school.name}</MDBCardTitle>
            <MDBCardText>
            <strong>Location:</strong>{school.location}
            </MDBCardText>
            <MDBCardBody>

            <strong>Established Year:</strong> {school.established_year}
            </MDBCardBody>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        ))}
     
    </MDBRow>
      </MDBCard>
</MDBCard>
</MDBContainer>

    </div>
  );
};

export default DisplaySchools;

