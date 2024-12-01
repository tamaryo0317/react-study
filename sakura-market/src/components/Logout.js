import React from "react";

class Logout extends React.Component {
    render() {
        const {isLogin, user, changeState } = this.props;

        return (
            <>
                <h4>これはLogoutです</h4>
            </>
        );
    };
}

export default Logout;