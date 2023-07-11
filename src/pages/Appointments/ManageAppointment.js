import React, { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import './Appointements.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AppointmentsPage = () => {
  let {id} = useParams();
  const [appointments, setAppointments] = useState({
    loading : true ,
    err : null , 
    results : [] ,
    reload : 0 ,
  });

  useEffect(() => {
    setAppointments({ ...appointments,loading : true});
    axios.get('      ')
      .then(resp => {
        setAppointments({...appointments, results : resp.data , loading : false , err:null });
      })
      .catch(err => {
        setAppointments({
          ...appointments,
            loading : false , 
            err: "something error please try again!" ,
          });

      }); 
  }, [appointments.reload]);

  const deleteappointement =(id) =>{
    axios.delete('      ' + id)
      .then(resp => {
        setAppointments ({...appointments , reload : appointments.reload +1})
      })
      .catch(err => {
        setAppointments({ 
            err: "something error" ,
          });

      });

  }

  return (
    <div className="bus p-5">
      <div className="header d-flex justify-content-between mb-3">
        <h3 className="text-center mb-3">MANAGE APPOINTEMENT</h3>
        <Link to={"AddAppointements"} className="btn btn-success mb-4"> Create New Appointment +</Link>
      </div>
      {appointments.err && (
        <Alert variant="danger" className="p-2">
          {appointments.err}
        </Alert>
      )}
      {appointments.success && (
        <Alert variant="success" className="p-2">
          {appointments.success}
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BusID</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Remaining Seats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.results.map((appointment) => (
            <tr key={appointment.id}>
              
              <td>{appointment.from}</td>
              <td>{appointment.to}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.price}</td>
              <td>{appointment.remainingSeats}</td>
              <td>
                <button className="btn btn-sm btn-danger mx-1 p-2" onClick ={(e) =>  {deleteappointement(appointment.id)}}>Delete</button>
                <Link to={"/" + appointment.id} className="btn btn-sm btn-primary mx-1 p-2">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AppointmentsPage;
