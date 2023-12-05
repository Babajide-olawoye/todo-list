import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const EditTODO = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userTextInput, setUserTextInput] = useState(location.state.data.title);
    const [userCheckboxInput, setUserCheckboxInput] = useState(location.state.data.completed);

    const handleInputTextChange = (e) => {
        setUserTextInput(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setUserCheckboxInput(e.target.checked);
    };

    const data = JSON.stringify({
        "title": userTextInput,
        "completed": userCheckboxInput
    });

    const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/todos/'+location.state.place,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const updateData = () => {
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onSubmit = () => {
        console.log(data);
        updateData();
        // navigate("/");
    }


    return (
        <div>
            <div className="new-todo-form">
                <div className="form-body">
                    <div className="form-body-inner">
                        <input id="form-input"
                            type="text"
                            value={userTextInput}
                            onChange={handleInputTextChange}

                        />
                        <div className="form-complete-checkbox">
                            Completed
                            <input type="checkbox"
                                checked={userCheckboxInput}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                    <button onClick={onSubmit} >Submit</button>
                    <Link to="/">Go back</Link>
                </div>
            </div>
        </div>
    )
}

export default EditTODO