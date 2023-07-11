import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Destinations.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateDestinations = () => {
  let {id} = useParams();

  const [destination, setDestination] = useState({
    loading : false ,
    err : "" ,
    Destination: "",
    success : null,
    reload : false,
  });

  const updateDestinations =(e) => {
    e.preventDefault() ;
    setDestination ({...destination, loading :true})

    const formData = new FormData();
    formData.append ("Destination",destination.Destination);
    


    axios
    .put('      /' + id, formData)
    .then(resp => {})
    .catch(err => {  
      setDestination({
        ...destination,
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
      setDestination({
        ...destination,
       Destination : resp.data.Destination ,
       
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
   
  }, [destination.reload])

  return (
    <div className="Update">
      <h1 className="text-center p-2">Update Destinations</h1>
      
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
      <Form onSubmit={updateDestinations}>
        <Form.Group controlId="Destinations">
          <Form.Label>Destinations</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Destinations"
           value={destination.Destination}
           onChange={(e) => setDestination({...destination, Destination:e.target.value})}
            
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Destinations
        </Button>
      </Form>
      

    </div>
  );
};

export default UpdateDestinations;