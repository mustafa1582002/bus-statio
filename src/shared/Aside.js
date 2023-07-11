import React from "react";
import '../style/Aside.css';
import image from '../assets/images/faces/face2.jpg';
import { Link } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";
const Aside = () =>{
    const auth=getAuthUser();
    return (
        <div className="aside">
            <div className="profile"><img src={image} alt='nnnn'/></div>
            <h1>Navigation</h1>
            <ul>
                
                {/*<li className="tabs"><Link to={'/'}> Dashboard</Link></li>*/}
                {auth && auth._role ===0 &&(
                    <>
                    <li className="tabs"><Link to={'/Travel'}>Home</Link></li>
                    <li className="tabs"><Link to={'/Home'}>Appointments</Link></li>
                    <li className="tabs"><Link to={'/History'}>history</Link></li>
                    </>
                )}
                {auth && auth._role ===1 &&(
                    <>
                    <li className="tabs"><Link to={'/Destinations'}> Destinations</Link></li>
                    <li className="tabs"><Link to={'/ManageBuses'}>Buses</Link></li>
                    <li className="tabs"><Link to={'/Travellers'}>Travellers</Link></li>
                    <li className="tabs"><Link to={'/Appointements'}>Appointements</Link></li>
                    <li className="tabs"><Link to={'/Requests'}>Requests</Link></li>
                    </>
                )}
            </ul>
        </div>
    );
};
export default Aside;