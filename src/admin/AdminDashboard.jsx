 
import React, { useEffect, useState } from "react";
import axios from "axios";  
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function AdminDashboard() {
    const [data, setData] = useState({});  
    const [cityData,setCityData] =useState([])
    const [pieData, setPieData] = useState(null);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const response = await axios.get("http://localhost:4500/api/v1/chestguard/getInsights");
                console.log(response)
                setData(response.data);
                setCityData(response.data.chk2)  
                console.log(cityData)
            } catch (err) {
                console.log("Error detected", err);
            }
        };

        fetchInsights();
    }, []);  
    useEffect(() => {
        if (data?.chk?.length >= 2) {
            setPieData({
                labels: [data.chk[0]._id, data.chk[1]._id],
                datasets: [
                    {
                        data: [data.chk[0].count, data.chk[1].count],
                        backgroundColor: [
                            "rgb(250, 246, 246)",
                            "rgba(5, 0, 0, 0.93)",
                        ],
                        borderWidth: 1,
                    },
                ],
            });
        }
    }, [data]);

    if (!data || !data.chk) {
        return <p>Loading data...</p>;
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-200">
            <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 px-10 py-6 rounded-2xl text-center transition-transform transform hover:scale-105">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Registered patients</h1>
                <p className="text-xl text-gray-600">👥 Total Users</p>
                <p className="text-4xl font-extrabold text-blue-600 mt-2">{data.userCount}</p>  
            </div>     


         
                <div className="h-1/2 w-64">{pieData && <Pie data={pieData} />}</div> 

           

                {cityData.map((eachValue) => (
          <div
            key={eachValue}
            className="border border-gray-300 p-4 rounded-lg shadow-sm bg-black"
          >    <div>{eachValue.city}
             {
                eachValue.results.map((i)=>(
                    <h3 className="font-bold text-black-800">{i.result}:{i.count}</h3>
                ))
             }
          
          </div>  
               



          </div>))}


        </div>    

        
    );
}