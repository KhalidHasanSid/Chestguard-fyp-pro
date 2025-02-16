import React, { useEffect } from "react"
import axios from "axios"

export default function AdminDashboard() {

    const [data ,setData]= React.useState({})

    React.useEffect(() => {

       const fetchInsights=  async()=>{
        try{
            const response = await axios.get("http://localhost:4500/api/v1/chestguard/getInsights");
            

           console.log(response)
           setData(response.data)
           console.log("hello",data)
          
        }
        catch(err){
         console.log("error detected ",err)
       }}
        fetchInsights();
    }, []);





    return(<>

 {<div className="inline-block bg-green-500 text-white font-bold px-5 py-2 rounded-2xl shadow-lg">
  current user: {data.userCount}
</div>}

        
        
        
        </>
        
    )
}