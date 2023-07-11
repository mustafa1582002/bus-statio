import React from "react";
import './Travel.css';
import baner from "../../assets/images/auth/Login_bg2.jpg";
import Calefornia from "../../assets/images/auth/Login_bg.jpg";
import london from "../../assets/images/auth/register-bg.jpg";
import LosAnglos from "../../assets/images/carousel/banner_8.jpg";
import hemalya from "../../assets/images/carousel/banner_7.jpg";
import { Link } from "react-router-dom";
const Travel = () =>{
    return (
        <div className="Travel">
            <div className="wel"> Welcome back,<span>Mostafa </span><hr/> </div>
            <div className="banNHis">
                <div className="baner bg-dark">
                    <img src={baner} alt="neneny"/>
                </div>
                <div className="his bg-dark">
                    <h3>history</h3>
                    <ul>
                        <li>Calefornia <hr/></li>
                        <li>New York <hr/></li>
                        <li>Los Anglos <hr/></li>
                        <li>Calefornia <hr/></li>
                        <li><Link to={'/history'}> see all history</Link></li>
                    </ul>
                </div>
            </div>
            <div className="view bg-dark">
                <h1>things to watch<hr/></h1>
                
                <div className="imgs bg-dark"> 
                    <div className="crd">
                        <img src={Calefornia} alt="neneny"/>
                        <h5>New York</h5>
                    </div>
                    <div className="crd">
                        <img src={london} alt="neneny"/>
                        <h5>London</h5>
                    </div>
                    <div className="crd">
                        <img src={LosAnglos} alt="neneny"/>
                        <h5>Los-Anglos</h5>
                    </div>
                    <div className="crd">
                        <img src={hemalya} alt="neneny"/>
                        <h5>Hemalya</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
export default Travel;