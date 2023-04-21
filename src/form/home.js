import React, { useState } from 'react';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import "../styles/home.css";
import { Routes, Route } from "react-router-dom";
import Card from '../components/card';
import Step3 from '../components/step3';

const Home = () => {

    const [firstname, setFirstname] = useState();

    const handleChangeFirstname = (e) => {
        setFirstname(e.target.value);
    }

    const [lastname, setLastname] = useState();
    const handleChangeLastname = (e) => {
        setLastname(e.target.value);
    }

    const [gender, setGender] = useState();
    const handleChangeMale = (e) => {
        setGender(e.target.value);
    }
    const handleChangeFemale = (e) => {
        setGender(e.target.value);
    }


    const [address, setAddress] = useState();
    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const [email, setEmail] = useState();
    const handleChangeEmail = (e) => {
        setEmail(e.traget.value);
    }

    return (
        <div className='home-container'>


            <Routes>
                <Route index element={<Step1 firstname={firstname} lastname={lastname} gender={gender} setFirstname={setFirstname} setLastname={setLastname} setGender={setGender} />} />
                <Route path='/step2' element={<Step2 address={address} setAddress={setAddress} />} />
                <Route path='/step3' element={<Step3 email={email} setEmail={setEmail} />} />
            </Routes>

            <Card firstname={firstname} lastname={lastname} gender={gender} address={address} email={email} />

        </div>
    )
}

export default Home;