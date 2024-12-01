import React from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const {isLogin, user, changeState } = props;
    return (
        <>
            <h4>これはLoginです</h4>
            <LoginForm isLogin={isLogin} user={user} changeState={changeState}/>
        </>
    );
};

export default Login;