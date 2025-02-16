import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function NewPatient() {
    const [MR_no, setMR_no] = useState( );
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [Age, setAge] = useState();
    const [city, setCity] = useState('');
    const [gender, setgender] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log( MR_no, fullname,email, Age, gender, city)
      const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/registerFYP', {
        MR_no,
        fullname,
        email,
        Age,
        gender,
        city
      },{withCredentials:true});

      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! You can now login.');
      setError('');
    } catch (err) {
      console.error('Registration error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>MR_no:</label>
      <input type="text" value={MR_no} onChange={(e) => setMR_no(e.target.value)} required />

        <label>Full Name:</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>AGE:</label>
        <input type="number" value={Age} onChange={(e) => setAge(e.target.value)} required />

        <label>GENDER:</label>
        <input type="text" value={gender} onChange={(e) => setgender(e.target.value)} required />

        <label>CITY:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      
    </>
  );
 
  
}


