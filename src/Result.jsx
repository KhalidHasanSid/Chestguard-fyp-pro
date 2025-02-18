import axios from "axios";
import React from "react";

export default function Result() {
  const [data, setData] = React.useState([]);
  

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/v1/chestguardDetection/getDetectedResults",{withCredentials:true}
        );  
        console.log(response.data.data)
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchData();
  }, []);

 

  return (
    <>
      <h1>Data</h1>

      {data.map((eachValue) => (
        <div
          key={eachValue._id}
          style={{
            border: "2px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
            <span>{eachValue.result}</span>
            <span>{eachValue.date}</span>
         
          
         
     
        </div>
      ))}
    </>
  );
}
