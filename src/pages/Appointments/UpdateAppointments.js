import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Appointements.css';

const UpdateAppointments = () => {
  let {id} = useParams();

  const [appointment, setAppointment] = useState({
    loading : false ,
    err : "" ,
    id : "",
    from : "",
    to : "",
    date : "",
    time : "",
    price : "",
    capacity : "",
    success : null,
    reload : false,
  });

  const updateappointement =(e) => {
    e.preventDefault() ;
    setAppointment ({...appointment, loading :true})

    const formData = new FormData();
    formData.append ("id",appointment.id);
    formData.append ("from",appointment.from);
    formData.append ("to",appointment.to);
    formData.append ("date",appointment.date);
    formData.append ("time",appointment.time);
    formData.append ("price",appointment.price);
    formData.append ("capacity",appointment.capacity);

    axios
    .put('      /' + id, formData)
    .then(resp => {})
    .catch(err => {  
      setAppointment({
        ...appointment,
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
      setAppointment({
        ...appointment,
       id : resp.data.id ,
       from : resp.data.from,
       to : resp.data.to ,
       time : resp.data.time ,
       date : resp.data.date ,
       price : resp.data.price ,
       capacity : resp.data.capacity ,
      })
    })
    .catch(err => {  
      setAppointment({
        ...appointment,
        loading : false ,
        err: "something error please try again!" ,
        success : null,

      })

    });
   
  }, [appointment.reload])
  

  return (
    <div className="Update">
      <h1 className="text-center p-2">Update Appointments</h1>
      {appointment.err && (
        <Alert variant="danger" className="p-2">
          {appointment.err}
        </Alert>
      )}
      {appointment.success && (
        <Alert variant="success" className="p-2">
          {appointment.success}
        </Alert>
      )}
      <Form onSubmit={updateappointement}>
        <Form.Group controlId="id">
          <Form.Label>Bus ID</Form.Label>
          <Form.Control type="text" placeholder="Enter bus ID" 
           value={appointment.id}
           onChange={(e) => setAppointment({...appointment, id:e.target.value})}
          />
        </Form.Group>

        <Form.Group controlId="From">
          <Form.Label>From</Form.Label>
          <Form.Control type="text" placeholder="Enter From"
          value={appointment.from}
          onChange={(e) => setAppointment({...appointment, from:e.target.value})}
          />
        </Form.Group>

        <Form.Group controlId="To">
          <Form.Label>To</Form.Label>
          <Form.Control type="text" placeholder="Enter To" 
           value={appointment.to}
           onChange={(e) => setAppointment({...appointment, to:e.target.value})}
          />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" 
           value={appointment.date}
           onChange={(e) => setAppointment({...appointment, date:e.target.value})}
          />
        </Form.Group>

        <Form.Group controlId="Time">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time"
           value={appointment.time} 
           onChange={(e) => setAppointment({...appointment, time:e.target.value})}
          />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" 
           value={appointment.price}
           onChange={(e) => setAppointment({...appointment, price:e.target.value})}

          />
        </Form.Group>

        <Form.Group controlId="Bus Capacity">
          <Form.Label>Bus Capacity</Form.Label>
          <Form.Control type="number" placeholder="Enter Bus Capacity" 
           value={appointment.capacity}
           onChange={(e) => setAppointment({...appointment, capacity:e.target.value})}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Appointments
        </Button>
      </Form>
    </div>
  );
};

export default UpdateAppointments;