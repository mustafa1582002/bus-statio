import React, { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import './ManageBuses.css';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';

const ManageBuses = () => {
  let {id} = useParams();
  const [buses, setBuses] = useState({
    loading : true ,
    err : null , 
    results : [] ,
    reload : 0 ,
  });

  useEffect(() => {
    setBuses({ ...buses,loading : true});
    axios.get('      ')
      .then(resp => {
        setBuses({...buses, results : resp.data , loading : false , err:null });
      })
      .catch(err => {
        setBuses({
          ...buses,
            loading : false , 
            err: "something error please try again!" ,
          });

      }); 
  }, [buses.reload]);

  const deletebus =(id) =>{
    axios.delete('      ' + id)
      .then(resp => {
        setBuses ({...buses , reload : buses.reload +1})
      })
      .catch(err => {
        setBuses({ 
            err: "something error" ,
          });

      });

  }

  return (
    <div className="bus p-5">
      <div className="header d-flex justify-content-between mb-3">
        <h3 className="text-center mb-3">MANAGE BUSES</h3>
        <Link to={'AddBus'} className="btn btn-success mb-4">
          Create New Bus +
        </Link>
      </div>
      {buses.err && (
        <Alert variant="danger" className="p-2">
          {buses.err}
        </Alert>
      )}
      {buses.success && (
        <Alert variant="success" className="p-2">
          {buses.success}
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Capacity</th>
            <th>Model</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {buses.results.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.capacity}</td>
              <td>{bus.model}</td>
              
              <td>
                <button className="btn btn-sm btn-danger mx-1 p-2" onClick ={(e) =>  {deletebus(bus.id)}}>Delete</button>
                <Link to={"/" + bus.id} className="btn btn-sm btn-primary mx-1 p-2">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBuses;