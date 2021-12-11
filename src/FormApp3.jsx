import React, { useState } from "react";
const FormApp3=()=>{
    const[txt,setTxt]=useState({});
    const inputevent=(e)=>{
        setTxt((pre)=>{
            return{
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }
    return(
        <>
            <div className="container m-5">
                Name:
                <input type="text" onChange={inputevent} name="name"/><br /><br />
                City:
                <input type="text" onChange={inputevent} name="city"/><br /><br />
                Mobile:
                <input type="text" onChange={inputevent} name="mobile"/><br /><br />
                Adhar:
                <input type="text" onChange={inputevent} name="adhar"/><br /><br />
            </div>
        </>
    )
}
export default FormApp3;