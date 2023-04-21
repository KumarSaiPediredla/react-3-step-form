import React, { useState } from 'react';
import "../styles/step1.css";
import { Link } from "react-router-dom";

const Step1 = ({ firstname,lastname, setFirstname, setLastname, setGender }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChangeFirstname = (e) => {
        setFirstname(e.target.value);
    }


    const handleChangeLastname = (e) => {
        setLastname(e.target.value);
    }

    const handleChangeMale = (e) => {
        setGender(e.target.value);
    }
    const handleChangeFemale = (e) => {
        setGender(e.target.value);
    }

    return (
        <div className='step1-container'>

            <form onSubmit={handleSubmit}>
                <input value={firstname} onChange={handleChangeFirstname} className='name' required placeholder='First Name' />
                <input value={lastname} onChange={handleChangeLastname} className='name' required placeholder='Last Name' />
                <div className='gender'>
                    <p>Gender : </p>
                    <span><input onChange={handleChangeMale} required name='gender' value="Male" type='radio' /><label>Male</label></span>
                    <span><input onChange={handleChangeFemale} required name='gender' value="Female" type='radio' /><label>FeMale</label></span>
                </div>

                <Link to="/step2"><button type='submit'>Next</button></Link>
            </form>



        </div>
    )
}

export default Step1;