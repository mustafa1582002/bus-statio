import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './Travellers.css';

const AddTravellers = () => {
  const [traveller, setTraveller] = useState({
    loading : false ,
    err : "" ,
    Name : "",
    email : "",
    phone : "",
    success : null,
  });

  const createtraveller =(e) => {
    e.preventDefault() ;
    setTraveller ({...traveller, loading :true})

    const formData = new FormData();
    formData.append ("Name",traveller.Name);
    formData.append ("email",traveller.email);
    formData.append ("phone",traveller.phone);
    

    axios
    .post('      ', formData)
    .then(resp => {
      setTraveller({
        loading : false ,
        err : null ,
        Name : "",
        email : "",
        phone : "",
        success : "Added Success",

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

  }
  return (
    <div className="add">
      <h1 className="text-center p-2">Add Travellers</h1>
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
      <Form onSubmit={createtraveller}>
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
          Add Travellers
        </Button>
      </Form>
    </div>
  );
};

export default AddTravellers;