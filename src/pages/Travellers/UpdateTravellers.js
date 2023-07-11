import React, { useState ,useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Travellers.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateTravellers = () => {
  //////
  let {id} = useParams();
  
    const [traveller, setTraveller] = useState({
      loading : false ,
      err : "" ,
      Name : "",
      email : "",
      phone : "",
      success : null,
      reload : false,
    });
  
    const updateTraveller =(e) => {
      e.preventDefault() ;
      setTraveller ({...traveller, loading :true})
  
      const formData = new FormData();
      formData.append ("Name",traveller.Name);
      formData.append ("email",traveller.email);
      formData.append ("phone",traveller.phone);
      
  
     /////////////////////id
      axios
      .put('      /' + id, formData)
      .then(resp => {})
      .catch(err => {  
        setTraveller({
          ...traveller,
          loading : false ,
          err: "something error please try again!" ,
          success : null,
  
        })
  
      }); 
  
    }
  
    useEffect(() => {
  
      axios
      .get('      /' + id)
      .then(resp => {
        setTraveller({
          ...traveller,
         id : resp.data.id ,
         capacity : resp.data.capacity ,
         model : resp.data.model ,
         
        })
      })
      .catch(err => {  
        setTraveller({
          ...traveller,
          loading : false ,
          err: "something error please try again!" ,
          success : null,
  
        })
  
      });
     
    }, [traveller.reload])


  return (
    <div className="Update">
      <h1 className="text-center p-2">Update Travellers</h1>
      {traveller.err && (
        <Alert variant="danger" className="p-2">
          {traveller.err}
        </Alert>
      )}
      {traveller.success && (
        <Alert variant="success" className="p-2">
          {traveller.success}
        </Alert>
      )}
      <Form onSubmit={updateTraveller}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={traveller.Name}
            onChange={(e) => setTraveller({...traveller, Name:e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={traveller.email}
            onChange={(e) => setTraveller({...traveller, email:e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            value={traveller.phone}
            onChange={(e) => setTraveller({...traveller, phone:e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Travellers
        </Button>
      </Form>
    </div>
  );
};

export default UpdateTravellers;