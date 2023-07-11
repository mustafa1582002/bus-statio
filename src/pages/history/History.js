import React, {useState, useEffect} from "react";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
import { useParams } from "react-router-dom";
const History = () =>{
    const auth =getAuthUser();
    let {id}=useParams();
    const [searches, setsearches]= useState({
        loading: true,
        result: [],
        err: null
    });
    useEffect (() => {
        setsearches({...searches, loading:true});
        axios
        .get("http://localhost:4001/user/history",{
        headers:{
            token:auth._token
        },
        params: {
            id: 26,
        },
        })
        .then((resp) => {
            setsearches({...searches,result: resp.data, loading:false, err: null});
            
        })
        .catch(err => {
            setsearches({...searches, loading:false , err: "something went wri=ong"});
        })
    }, []);
    return (
        <div className="history container  align-self-center ">
            <table className="table table-dark table-striped table-responsive-sm table-xlg tb">
                <thead>
                    <th> #Ticketid </th>
                    <th># user_id </th>
                    <th> To </th>
                </thead>
                <tbody>
                    {searches.result.map((item)=>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user_id}</td>
                        <td>{item.search}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default History;