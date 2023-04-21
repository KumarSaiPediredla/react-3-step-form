import React from 'react';
import "../styles/card.css";

const Card = (props) => {
  const {firstname,lastname,gender,address,email} = props;
  return (
    <div className='card-container'>
      <h3>Details</h3>
      <input value={firstname} name='firstname' readOnly />
      <input value={lastname} name='lastname' readOnly />
      <input name='gender' value={gender} readOnly />
      <textarea value={address} name="address" placeholder='Enter your Address here' rows="4" cols="50"></textarea>
      <input name='email' value={email} readOnly />
    </div>
  )
}

export default Card;