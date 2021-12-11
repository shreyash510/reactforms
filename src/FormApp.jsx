import React from "react";
import { useState } from "react/cjs/react.development";
const FormApp=()=>{
  const[txt, setTxt]=useState({
    fname:'',
    lname:'',
    mobile:'',
    address:''
  })
  const inputevent=(event)=>{
    const name = event.target.name;
    const value =event.target.value;

    setTxt((prev)=>{
      if(name === 'fname'){
        return{
          fname:value,
          lname:prev.lname,
          mobile:prev.mobile,
          address:prev.address
        }
      }else if(name ==='lname'){
        return{
          fname:prev.fname,
          lname:value,
          mobile:prev.mobile,
          address:prev.address
        }
      }else if(name ==='mobile'){
        return{
          fname:prev.fname,
          lname:prev.lname,
          mobile:value,
          address:prev.address
        }
      }else if(name === 'address'){
        return{
          fname:prev.fname,
          lname:prev.lname,
          mobile:prev.mobile,
          address:value
        }
      }
    })
  }
  const btnClick=()=>{

  }
  return(
    <>
        <div className="container my-4">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
    <input name="fname" onChange={inputevent} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Last name</label>
    <input name="lname" onChange={inputevent} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
    <input name="mobile" onChange={inputevent} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input name="address" onChange={inputevent} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={btnClick} className="btn btn-primary">Submit</button>
</form>
<div className="container my-5">
  <p>First Name: {txt.fname} </p>
  <p>Last Name : {txt.lname}</p>
  <p>Mobile: {txt.mobile}</p>
  <p>Address: {txt.address}</p>
</div>
        </div>
    </>
  )
}
export default FormApp;