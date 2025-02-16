import axios from "axios";
import React from "react";

export default function SendEmail() {
  const [info, setInfo] = React.useState({});
  const [MR_no, setMR_no] = React.useState( "");
  const [password, setPassword] = React.useState( "");

  

 
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/api/v1/chestguarduser/getPatients/${MR_no}`,{withCredentials:true}
        );
        console.log(response.data.data)
        setInfo(response.data.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

  const genratePassword =()=>{
    let num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const pass = MR_no +"_"+num
    console.log(pass)
    setPassword(pass)
  }


  
   
  
 


  const send = async (_id) => {

    console.log("=====================")
     

     try {
       const res = await axios.post(
        "http://localhost:4500/api/v1/chestguarduser/sendEmail",
        { _id, password },
        { withCredentials: true }
      );

      console.log(response)

      
     
     } catch (err) {
       console.error("Error approving question:", err);
  }
   };
   

  return (
    
    <>
    <div className="bg-black">
        <input type="text"  value={MR_no} onChange={(e)=>setMR_no(e.target.value)} />
        <button  onClick={fetchData}>search</button>
    </div>
      <h1>Data</h1>

      
        <div
          key={info._id}
          style={{
            border: "2px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{info._id}</h3>
          <input type="text" readOnly value={info.MR_no} />
          <h2>{info.fullname}</h2>
          <input type="text" readOnly value={info.email} />

          
          <button onClick={() => genratePassword()}>gentrate password</button>
          <button onClick={() => send(info._id)}>sendto patient</button>
        </div>
     
    </>
  );
}
