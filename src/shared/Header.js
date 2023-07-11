import React, { useEffect, useState } from "react";
import '../style/Header.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { removeAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";
const Header = () =>{
    const navigate =useNavigate();
const logout =()=>{
    removeAuthUser();
    navigate("/login");
}

    const UserOn='sideNav';
    //use state
    const [User,setUser] =useState(UserOn);
    const Close =()=>{
        setUser('sideNav')
    }
    const list =()=>{
        if (User===UserOn){
            setUser('sideNavNone')
        }
        else
        setUser(UserOn)
    }
    useEffect(()=>{
        setUser('sideNavNone')
    },[]);
    return (
        <>
        <Navbar bg="dark" variant="dark" className='header'>
          <Container>
            <Navbar.Brand href="../pages/Dashboard/Dashboard.js">Bus Booking</Navbar.Brand>
  
            <Nav className="ms-auto">
            <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
       
    );
};
export default Header;