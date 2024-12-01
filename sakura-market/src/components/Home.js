import React from "react";

const  Home = (props) => {
    const {isLogin, user, changeState } = props;
    // console.log(`isLogin: ${isLogin}, user: ${user}`)
    return (
        <>
            <h4>これはHomeです</h4>
            {user && (
                <p>こんにちは、{user}さん。</p>
            )}
        </>
    );
};

export default Home;