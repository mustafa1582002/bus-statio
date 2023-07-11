import React ,{ useEffect,useState} from "react";
import './style/ProductInfo.css';
import { useParams } from "react-router-dom";
import hemalya from "../../assets/images/carousel/banner_7.jpg";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

const ProductInfo = () =>{
    let { id } =useParams();
    const auth=getAuthUser();
    const [product, setproduct]= useState({
        loading: true,
        result: null,
        err: null,
    });
    // console.log(product.result[0].destination);
    useEffect (() => {
        setproduct({...product, loading:true});
        axios
        .get("http://localhost:4001/Appointments/" +id,{
            headers:{
                token:auth._token
            },
        })
        .then(resp => {
            setproduct({...product,result: resp.data, loading:false, err: null});
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
            setproduct({...product, loading:false , err: "something went wri=ong"});
        })
    }, []);

    return (
        <div className="ProductInfo p-5 bg-dark">
            {
            product.loading === true &&(
            <div className="spino">
                <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            
            )}
            {product.loading === false && product.err ==null &&(
                <>
                    <div className="row">
                        <div className="col-4">
                            <img src={hemalya} alt="" />
                        </div>
                        <div className="col-8">
                        {product.result ?(
                            <h1> {product.result[0].destination}</h1>
                        ):<p>loading</p>}
                            
                            <p>
                                Leorm ipsum is simply a dummy text of the printing and typesetting
                                industrt. Leorn Ipsum has been the industry's the standard dummy text
                                ever since 1500s.Leorm ipsum is simply a dummy text of the printing and typesetting
                                industrt. Leorn Ipsum has been the industry's the standard dummy text
                                ever since 1500s.Leorm ipsum is simply a dummy text of the printing and typesetting
                                industrt. Leorn Ipsum has been the industry's the standard dummy text
                                ever since 1500s.Leorm ipsum is simply a dummy text of the printing and typesetting
                                industrt. Leorn Ipsum has been the industry's the standard dummy text
                                ever since 1500s.
                            </p>
                            <button className="btn btn-primary w-100 mt-5"> Book Now</button>
                        </div>
                    </div>
                </>
            )}
            {product.loading === false && product.err !=null &&(
            <div className="alert alert-warning" role="alert">
                "Something went wrong ,please try "{product.err}
            </div>
            )}
        </div>
    );
    
};
export default ProductInfo;