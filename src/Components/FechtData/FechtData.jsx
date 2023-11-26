/* eslint-disable react/jsx-key */
import { useState } from "react";
import ManagePost from "../ManagePost/ManagePost";
import { useEffect } from "react";
import "./FechtData.css"

export default function FechtData() {
    const [datas,setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((dat)=>(setData(dat)))
    },[])


  return (
    <>
        <div className="cards">
     
        {
            datas.map((val)=> <ManagePost  val={val} />)        }
       
       </div>
                
    </>


  )
}
