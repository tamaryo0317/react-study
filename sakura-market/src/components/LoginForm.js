import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// useNavigateは関数コンポーネント内でしか使用できません。クラスコンポーネントではフックを使用できない。エラーが発生する。
const LoginForm = ({ changeState }) => {
    // エラーメッセージをstateで管理することで動的に扱えるようにする
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // async handleSubmit(event) {}だとchangeStateが使えない
    // アロー関数を使うことで、this のバインディングが正しく行われるようにする(changeStateが使えるようになる)
    const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/SAKURAspa/system/LoginServlet', {
                method: 'POST',
                body: new FormData(event.target)
            });
            const data = await response.json();
            if (data.errormsg) {
                setError(data.errormsg);
                // alert(data.errormsg);
            }
            else {
                setError('');
                changeState(true, data.user);
                // alert(`user: ${data.user}, massage: ${data.message}`);
                // navigate('/home');
                navigate('/home', { state: { user: data.user, message: data.message}});
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Login</h2>
                <form name="loginform" method="post" onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="customerId">顧客番号:</label>
                        <input
                            type="text"
                            id="customerId"
                            name="customerId"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">パスワード:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>
                    <button type="submit">ログイン</button>
                </form>
                {/* エラーメッセージが存在する場合に表示 */}
                {error && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        <strong>{error}</strong>
                    </div>
                )}
            </div>
            <form >
            
            </form>
        </>
    );
}

export default LoginForm;

// import React from "react";
// import { useNavigate } from 'react-router-dom';
// class LoginForm extends React.Component {
//     // async handleSubmit(event) {}だとchangeStateが使えない
//     // アロー関数を使うことで、this のバインディングが正しく行われるようにする(changeStateが使えるようになる)
//     handleSubmit = async(event) => {
//         const { changeState } = this.props;
//         const navigate = useNavigate();
//         event.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8080/SAKURAspa/system/LoginServlet', {
//                 method: 'POST',
//                 body: new FormData(event.target)
//             });

//             const data = await response.json();
//             if (data.errormsg) {
//                 alert(data.errormsg);
//             }
//             else {
//                 changeState(true, data.user);
//                 alert(`user: ${data.user}, massage: ${data.message}`);
//                 navigate('/home');
//             }
//         }
//         catch (error) {
//             console.error('Error:', error);
//         }
//     }
//     render() {
//         const {isLogin, user} = this.props;

//         return (
//             <>
//                 <div>
//                     <h2>Login</h2>
//                     <form name="loginform" method="post" onSubmit={this.handleSubmit}>
//                         <div>
//                             <label htmlFor="customerId">顧客番号:</label>
//                             <input
//                                 type="text"
//                                 id="customerId"
//                                 name="customerId"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password">パスワード:</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                             />
//                         </div>
//                         <button type="submit">ログイン</button>
//                     </form>
//                 </div>
//                 <form >
                
//                 </form>
//             </>
//         );
//     };
// }

// export default LoginForm;