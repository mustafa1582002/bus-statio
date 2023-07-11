import React from "react";
import '../style/ProductCard.css';
import { Link } from "react-router-dom";
import img from "../../../assets/images/carousel/banner_1.jpg"

const ProductCard = (props) =>{

    return (
        <div className="product-card">
            <div className="card crd bg-dark " >
                <img src={img} className="card-img-top" alt="naaaan nnnnaaan"/>
                <div className="card-body">
                    <h3>{props.destination}</h3>
                    <p> from {props.source} and it will start at {props.start_datetime} and end at {props.end_datetime}
                    the Ticket Price = {props.price}
                    only 15 seats are free
                    </p>
                    <Link className="btn btn-primary w-100" to={'/product-info/' + props.id}>Watch it</Link>
                </div>
            </div>
        </div>
    );
    
};
export default ProductCard;