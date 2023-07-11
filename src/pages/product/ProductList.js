import React,{useState,useEffect} from "react";
import './style/Productlist.css';
import ProductCard from "./components/ProductCard";
import { Data } from "../../core/data/Data";
import EmptyProduct from "./components/EmptyProduct";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Alert from "react-bootstrap/Alert";
import Form  from "react-bootstrap/Form";
import { getAuthUser } from "../../helper/Storage";
const ProductList = () =>{
    const auth=getAuthUser();

    const [value, setvalue] = useState(50)
    const [products, setproducts]= useState({
        loading: true,
        results: [],
        err: null,
        reload: 0,
    });
    const [search, setSearch]= useState("");
    useEffect (() => {
        setproducts({...products, loading:true});
        axios
        .get("http://localhost:4001/Appointments/filter",{
        headers:{
            token:auth._token
        },
        params: {
                search: search,
            },
        })
        .then((resp) => {
            setproducts({...products,results: resp.data, loading:false, err: null});
        })
        .catch(err => {
            setproducts({...products, loading:false , err: "something went wri=ong"});
        })
    }, [products.reload]);
    
    const searchPro = (e) =>{
        e.preventDefault()
        setproducts({...products, reload:products.reload+1});
    }
    const handlerangedinput = (e)=>{
        setvalue(e.target.value)

    }
    return (
        <>
    <div className="home-container">
        {
        products.loading === true &&(
            <div className="spino">
                <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            
        )}
        {products.loading === false && products.err ==null &&(
            <>
                <form onSubmit={searchPro}>
                    <input type="text" placeholder=" Enter the place you want to Go" value={search} 
                    onChange={(e)=> setSearch(e.target.value)}/>
                    <button className="btn btn-dark">Search</button>
                </form>
                <div className="d-flex">
                    <div className="row g-3 align-items-center mx-5 mt-1">
                        <div className="col-auto">
                            <label for="inputPassword6" className="col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="" className="form-control bg-dark text-info" aria-labelledby="passwordHelpInline"/>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mx-5 mt-1">
                        <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">destination</label>
                        </div>
                        <div className="col-auto">
                        <input type="text" id="" className="form-control bg-dark text-info" aria-labelledby="passwordHelpInline"/>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mx-5 mt-1">
                        <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">start_datetime</label>
                        </div>
                        <div className="col-auto">
                        <input type="text" id="" className="form-control bg-dark text-info" aria-labelledby="passwordHelpInline"/>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <label for="myRange" class="form-label"> Price{value}$ </label>
                        <input type="range" min="0" max="4000" value={value} onChange={handlerangedinput} id="myRange"/>
                    </div>
                    

                </div>
                <div className="product-list row">
                    {products.results.map((item)=>(
                        <div className="col-3 " key={item.id}>
                            <ProductCard id={item.id} source={item.source} destination={item.destination} start_datetime={item.start_datetime} end_datetime={item.end_datetime} bus={item.bus} price={item.price} />
                        </div>
                    ))}
                </div>
            </>
        )}
        {products.loading === false && products.err !=null &&(
            <div className="alert alert-warning" role="alert">
                "Something went wrong ,please try "{products.err}
            </div>
        )}
    </div>
    </>
    );
};
export default ProductList;