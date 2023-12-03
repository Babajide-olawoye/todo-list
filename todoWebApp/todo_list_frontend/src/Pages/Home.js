import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useStateRef from 'react-usestateref';
import Navbar from '../Components/Navbar/Navbar';

export const Home = () => {

    // let data = '';
    const [data, setData, dataRef] = useStateRef([]);

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/todos'
        
        // data: data
    };

    const getData = () => {
        axios.request(config)
            .then((response) => {
                setData(response.data)
                console.log(dataRef.current);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    useEffect(() => {
        getData(); // Invoke the function
    }, []);
    



    return (
        <div>
            <Navbar/>
            <h2>Todo List</h2>
            {dataRef.current.map(data =>{
                return(<div key={data.id}>
                    {data.title}
                </div>)
            })}
        </div>
    )
}
