import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/step3.css";

const Step3 = ({ email, setEmail }) => {

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }


    const [show, setShow] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();

        setShow(false);
    }

    return (
        <div className='step3-container'>
            {show ? <>

                <form>
                    <input onChange={handleChangeEmail} value={email} name='email' type='email' required placeholder='enter your email' />
                    <div>
                        <Link to="/step2"><button>Previous</button></Link>
                        <button onClick={handleClick} type='submit'>Submit</button>
                    </div>
                </form>

            </>

                : <h1>Form Submitted</h1>


            }


        </div>
    )
}

export default Step3