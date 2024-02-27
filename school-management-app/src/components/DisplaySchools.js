

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
    MDBContainer,
    MDBIcon,
    MDBBtn
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
     {/* <Navbar/> */}
     
      <h1 className='text-center m-3'>School Search</h1>
      <h5 className='text-center m-3'>Find the right school for your child.
</h5>
 

      <MDBContainer fluid className='m-3'>

<MDBCard className='text-black m-5 p-3' style={{borderRadius: '25px'}}>


  
      <MDBCard  alignment='center'>
        
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      {schools.map((school) => (
       

          <MDBCol key={school.id}>
        <MDBCard >
          <MDBCardImage
            src={`http://localhost:5000/images/${school.image}`}
            alt='...'
            position='top'
            style={{"width":"374px","height":"300px","display":"cover"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='text-grey'><h2>{school.name}</h2></MDBCardTitle>
            <MDBCardText>
            <strong>Location:</strong>{school.location}
            <br />
            <strong>Board:</strong>{school.board}{" "}
<br />
            <strong>Established Year:</strong> {school.established_year}
            </MDBCardText>
            
            <MDBBtn href='#'>Apply Now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        ))}
     
    </MDBRow>
      </MDBCard>
</MDBCard>
</MDBContainer>
{/* <footer/> */}
    </div>
  );
};

export default DisplaySchools;

