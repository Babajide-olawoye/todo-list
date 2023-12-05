import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useStateRef from 'react-usestateref';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css'
import NewTODO from '../NewTODO/NewTODO';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    // let data = '';
    const [data, setData, dataRef] = useStateRef([]);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/todos'

        // data: data
    };

    let configDel = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/todos',
        headers: { 
            'Content-Type': 'application/json'
        },

        data: ""
    };


    const getData = () => {
        axios.request(config)
            .then((response) => {
                setData(response.data)
                // console.log(dataRef.current);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const delData = (config) => {
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
    }

    useEffect(() => {
        getData(); // Invoke the function
    }, []);

    const handleClick = (place, data) => {
        setIsClicked(!isClicked);
        navigate("/EditTODo", {
            state:
            {
                place: place,
                data: data
            }
        })
    };

    const handleDelClick = (place) => {
        const deleteConfig = configDel;
        deleteConfig.url = 'http://localhost:8080/api/todos/' + place;
        
        delData(deleteConfig);
        window.location.reload();
    }


    return (
        <div className="home">

            <div className="home-body">
                <div className="home-title">
                    Collection list
                </div>

                {dataRef.current.map((data) => {
                    return (
                        <div className="todo-element" key={data.id}>
                            <h3>{data.title}</h3>
                            <div className="todo-element-right">
                                <h3>{data.completed ? 'Completed' : 'Incompleted'}</h3>
                                <button onClick={() => { handleClick((data.id), data) }}>Edit</button>
                                <button onClick={() =>{handleDelClick(data.id)}}>Delete</button>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}
