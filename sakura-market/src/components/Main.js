import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import GoodsList from "./GoodsList";
const Main = (props) => {
    const {isLogin, user, changeState } = props;

    return (
        <>
            <h3>これはMainです</h3>
            <div>
                isLogin: {isLogin.toString()}<br></br>
                user: {user}<br></br>
            </div>
            <button onClick={() => changeState(true, "button_pusher")}>changeStateボタン</button>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/GoodsList">GoodsList</Link>
                    </li>
                </ul>
                <hr></hr>
                <Routes>
                    <Route path="/" element={<Login {...props}/>} />
                    <Route path="/login" element={<Login {...props}/>} />
                    <Route path="/logout" element={<Logout {...props}/>} />
                    <Route path="/home" element={<Home {...props}/>} />
                    <Route path="/GoodsList" element={<GoodsList {...props}/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Main;

// import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from "./Login";
// import Logout from "./Logout";
// import Home from "./Home";
// import GoodsList from "./GoodsList";
// class Main extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isLogin: false,
//             user: 'main'
//         }
//     }
//     render() {
//         // const {isLogin, user, changeState } = this.props;
//         const { changeState } = this.props;

//         return (
//             <>
//                 <h3>これはMainです</h3>
//                 <div>
//                     isLogin: {this.state.isLogin.toString()}<br></br>
//                     user: {this.state.user}<br></br>
//                 </div>
//                 <button onClick={() => changeState(true, "button_pusher")}>changeStateボタン</button>
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/" element={<Login isLogin={this.state.isLogin} user={this.state.user} changeState={changeState}/>} />
//                         <Route path="/login" element={<Login isLogin={this.state.isLogin} user={this.state.user} changeState={changeState}/>} />
//                         <Route path="/logout" element={<Logout isLogin={this.state.isLogin} user={this.state.user} changeState={changeState}/>} />
//                         <Route path="/home" element={<Home isLogin={this.state.isLogin} user={this.state.user} changeState={changeState}/>} />
//                         <Route path="/GoodsList" element={<GoodsList isLogin={this.state.isLogin} user={this.state.user} changeState={changeState}/>} />
//                     </Routes>
//                 </BrowserRouter>
//             </>
//         );
//     };
// }

// export default Main;