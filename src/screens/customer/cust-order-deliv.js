import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { collection, query, where, onSnapshot,db } from "../../configs/firebase";
import { GlobalContext } from "../../context/context";

export default function CustDeliveredOrders(){
    const {state} = useContext(GlobalContext);
    const [orderDelivered , setDeliveredOrders] = useState([]);

    useEffect(async()=>{





const q = query(collection(db, "odersDelivered"), where("custId", "==", state.authUser.uid));
let orderDeliveredClone = orderDelivered.slice(0);
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        console.log("New city: ", change.doc.data());
        let obj = change.doc.data();
        obj.id = change.doc.id;
        orderDeliveredClone.push(obj);
    }
  
  });
});

setDeliveredOrders(orderDeliveredClone)

    })
    return(
        <div>
        <h1>Delivered Orders</h1>
        {orderDelivered.map(({foodname,foodImg,category,price,custID,id},index)=>{
            return(
                <div key={index}  className='border mt-5 h-50 w-50' id={id}>
                    <img src={foodImg} className='h-50 w-50' />
                    <h2>{foodname}</h2>
                    <h3>{category}</h3>
                    <p>{price}</p>
                    <p style={{display:'none'}}>{custID}</p>
                    {/* <button className='btn btn-success' onClick={(e)=>{acceptedOrder(e.target.parentNode)}}>Accept</button> */}

                </div>
            )
            
        })
    }


        </div>

    )
}