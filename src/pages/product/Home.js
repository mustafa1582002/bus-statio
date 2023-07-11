import React from "react";
import './style/Home.css';
import ProductList from "./ProductList";
import Aside from "../../shared/Aside";
const Home = () =>{
    return (
        <div className="Home">
            <Aside />
            <ProductList />
        </div>
    );
};
export default Home;