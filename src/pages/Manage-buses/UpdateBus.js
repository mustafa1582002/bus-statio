import React, { useState , useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './ManageBuses.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBus = () => {
    let {id} = useParams();
  
    const [bus, setBus] = useState({
      loading : false ,
      err : "" ,
      id: "",
      capacity: "",
      model: "",
      success : null,
      reload : false,
    });
  
    const updateBus =(e) => {
      e.preventDefault() ;
      setBus ({...bus, loading :true})
  
      const formData = new FormData();
      formData.append ("id",bus.id);
      formData.append ("capacity",bus.capacity);
      formData.append ("model",bus.model);
      
  
  
      axios
      .put('      /' + id, formData)
      .then(resp => {})
      .catch(err => {  
        setBus({
          ...bus,
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
        setBus({
          ...bus,
         id : resp.data.id ,
         capacity : resp.data.capacity ,
         model : resp.data.model ,
         
        })
      })
      .catch(err => {  
        setBus({
          ...bus,
          loading : false ,
          err: "something error please try again!" ,
          success : null,
  
        })
  
      });
     
    }, [bus.reload])

  return (
    <div className="Update">
      <h1 className="text-center p-2">Update Bus</h1>
      
      {bus.err && (
        <Alert variant="danger" className="p-2">
          {bus.err}
        </Alert>
      )}
      {bus.success && (
        <Alert variant="success" className="p-2">
          {bus.success}
        </Alert>
      )}
      
      <Form onSubmit={updateBus}>
        <Form.Group controlId="id">
          <Form.Label>Bus ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            placeholder="Enter bus ID"
            value={bus.id}
            onChange={(e) => setBus({...bus, id:e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="capacity">
          <Form.Label>Capacity</Form.Label>
          <Form.Control
            type="number"
            name="capacity"
            placeholder="Enter bus capacity"
            value={bus.capacity}
            onChange={(e) => setBus({...bus, capacity:e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            placeholder="Enter bus model"
            value={bus.model}
            onChange={(e) => setBus({...bus, model:e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Bus
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBus;