import React, { useState } from 'react'
import useStateRef from 'react-usestateref';
import './NewTODO.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewTODO = () => {

    const [userTextInput, setUserTextInput] = useState("");
    const [userCheckboxInput, setUserCheckboxInput] = useState("false");
    const navigate = useNavigate();

    const data = JSON.stringify({
        "title": userTextInput,
        "completed": userCheckboxInput
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/todos',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const addData = () => {
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onSubmit = () => {
        addData();
        console.log(data);
        navigate("/");
    }

    const handleInputTextChange = (e) => {
        setUserTextInput(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setUserCheckboxInput(e.target.checked);
    };

    return (

        <div className="new-todo-form">
            <div className="form-body">
                <div className="form-body-inner">
                    <input id="form-input"
                        type="text"
                        placeholder="New todo"
                        onChange={handleInputTextChange}
                    />
                    <div className="form-complete-checkbox">
                        Completed
                        <input type="checkbox" 
                        onChange={handleCheckboxChange}/>
                    </div>
                </div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default NewTODO