import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login(){
  const [MR_no,setMR_no]=React.useState("")
  const [password ,setPassword]=React.useState("") 
  const navigate = useNavigate();

  const abc= async(e)=>{
    e.preventDefault();
    console.log(MR_no,"password",password)
   
    try {
      const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/loginFYP', {
        MR_no: MR_no, 
        password: password,
      }, { withCredentials: true }); 

      console.log('Login successful:', response, "token is here ", response.data.data.access);
     
      
      localStorage.setItem('Accesstoken', response.data.data.access);
      localStorage.setItem('Refreshtoken', response.data.data.refresh);
      localStorage.setItem('loginTimestamp', Date.now());

      navigate('/home');
      
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return(
    <>
    <h1 className="text-3xl font-bold underline">heloo world</h1>
      <label  >MR_no:</label>
      <input  onChange={(e)=> setMR_no(e.target.value)} type="text" />
      <label >Password:</label>
      <input onChange={(e)=> setPassword(e.target.value)} type="password" />
      <button onClick={abc} >Login</button>
      <Link to ="/registration"><button>Register</button></Link>
      <Link to = "/forgetpassword">
         <h4 className='"underline decoration-black-700"'>Forget password</h4>
      </Link>
    </>
  );
}

export default Login;
