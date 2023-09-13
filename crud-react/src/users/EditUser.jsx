// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""

    })

    useEffect(() => {
        loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const { name, username, email } = user;

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/user/${id}`, user)
        setUser(result.data)
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/user/${id}`, user)
        navigate("/")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form action="" onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type={"text"} className="form-control" placeholder="enter your name"
                                name="name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type={"text"} className="form-control" placeholder="enter your username" name="username"
                                value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type={"email"} className="form-control" placeholder="enter your email" name="email"
                                value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-outline-primary" >Submit</button>
                        <Link type="submit" className="btn btn-outline-danger mx-2" to="/" >Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser