import React, { useState } from "react";
const FormApp2 = () => {
    const [txt, setTxt] = useState({
        fname: '',
        lname: '',
        mobile: '',
        address: ''
    });
    const inputevent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTxt((preV) => {
            return {
                ...preV,
                [name]: value,
            }
        })
    }
    const btnClick = (e) => {
        e.preventDefault();
        console.log(txt.fname);
        console.log(txt.lname);
        console.log(txt.mobile);
        console.log(txt.address);
    }


    return (
        <>
            <div className="container border p-5 my-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name </label>
                        <input onChange={inputevent} name="fname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                        <input onChange={inputevent} name="lname" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"> Mobile</label>
                        <input onChange={inputevent} name="mobile" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input onChange={inputevent} name="address" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button onClick={btnClick} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}
export default FormApp2;