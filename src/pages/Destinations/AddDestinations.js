import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Destinations.css';
import axios from 'axios';

const AddDestinations = () => {
  const [destination, setDestination] = useState({
    loading : false ,
    err : "" ,
    Destinations : "",
    success : null,
  });

  const createdestination =(e) => {
    e.preventDefault() ;
    setDestination ({...destination, loading :true})

    const formData = new FormData();

    formData.append ("id",destination.Destinations);

    axios
    .post('      ', formData)
    .then(resp => {
      setDestination({
        loading : false ,
        err : null ,
        Destinations : "",
        success : "Added Success",

      })
    })
    .catch(err => {  
      setDestination({
        ...destination,
        loading : false ,
        err: "something error please try again!" ,
        success : null,

      })

    }); 

  }

  return (
    <div className="add">
      <h1 className="text-center p-2">Add Destinations</h1>
      {destination.err && (
        <Alert variant="danger" className="p-2">
          {destination.err}
        </Alert>
      )}
      {destination.success && (
        <Alert variant="success" className="p-2">
          {destination.success}
        </Alert>
      )}
      <Form onSubmit={createdestination}>
        <Form.Group controlId="Destinations">
          <Form.Label>Destinations</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Destinations"
            value={destination.date}
            onChange={(e) => setDestination({...destination, Destinations:e.target.value})}

          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Destinations
        </Button>
      </Form>
    </div>
  );
};

export default AddDestinations;