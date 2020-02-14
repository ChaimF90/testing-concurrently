import React from "react";
import { Redirect } from "react-router-dom";

const Private = () => {
    const token = localStorage.getItem("cwcToken");
    if (token) {
        return (
            <h1>If you're seeing me then you are logged in</h1>
        );
    } else {
        return (
            <Redirect to="/login" />
        )
    }
};

export default Private;
