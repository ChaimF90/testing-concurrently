import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        axios.post("/auth", body).then(() => {
            props.location.history.push("/login");
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                name="email"
                placeholder="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Create account</button>
            <Link to="/login">Sign In</Link>
        </form>
    );
};

export default Signup;
