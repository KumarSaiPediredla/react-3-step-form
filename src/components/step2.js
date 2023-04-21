import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/step2.css";



const Step2 = ({ address,setAddress }) => {

    const handleChangeAddress= (e)=>{
        setAddress(e.target.value);
    }


    return (
        <div className='step2-container'>
            <form>
                <textarea onChange={handleChangeAddress} value={address} name="address" placeholder='Enter your Address here' rows="4" cols="50"></textarea>
                <div>
                    <Link to="/step1"><button>Previous</button></Link>
                    <Link to='/step3'><button type='submit'>Next</button></Link>
                </div>
            </form>


        </div>
    )
}

export default Step2;