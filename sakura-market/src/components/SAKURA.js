import React from 'react';
import Main from './Main';
import { useState } from 'react';

const SAKURA = (props) => {
    const [isLogin, setisLogin] = useState(props.isLogin);
    const [user, setUser] = useState(props.user);
    const [headerMessage, setHeaderMessage] = useState(props.headerMessage);

    const changeState = (newisLogin, newuser) => {
        setisLogin(newisLogin);
        setUser(newuser);
        console.log(`変更後のstate: isLogin: ${isLogin}, user: ${user}`);
    };
    
    return (
        <>
            <h2>これはSAKURAです</h2>
            <div>
                isLogin: {isLogin.toString()}<br></br>
                user: {user}<br></br>
                headerMessage: {headerMessage}<br></br>
            </div>
            <hr></hr>
            <Main isLogin={isLogin} user={user} changeState={changeState}/>
        </>
    )
}

export default SAKURA;

// クラスで書くと、なんかstateがまた別で定義される感じになる。
// そしてappから引き渡されたpropsのisLoginやuserが動的に変更されない。ずっと初期状態のまま。
// import React from 'react';
// import Main from './Main';
// class SAKURA extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isLogin: false,
//             user: 'sakura',
//             headerMessage: 'this is a header message.'
//         }
//     }
//     changeState = (newisLogin, newuser) => {
//         this.setState(
//             {
//             isLogin: newisLogin,
//             user: newuser
//             },
//             () => {
//                 // 変更後をコンソールに表示
//                 // this.state.isLoginがよい（isLoginでもthis.isLoginでもundefinedになる）
//                 console.log(`変更後のstate: isLogin: ${this.state.isLogin}, user: ${this.state.user}`);
//             }
//         );
//     };
    
//     render() {
//         // const { isLogin, user, headerMessage } = this.props;
//         return (
//             <>
//                 <h2>これはSAKURAです</h2>
//                 <div>
//                     isLogin: {this.state.isLogin.toString()}<br></br>
//                     user: {this.state.user}<br></br>
//                     headerMessage: {this.state.headerMessage}<br></br>
//                 </div>
//                 <hr></hr>
//                 <Main isLogin={this.state.isLogin} user={this.state.user} changeState={this.changeState}/>
//             </>
//         )
//     };
// }

// export default SAKURA;