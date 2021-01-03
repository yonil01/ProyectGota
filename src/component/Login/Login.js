import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../style.scss'
import '../../assets/scss/reset.scss'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/user/profile.png'

const Login = () => {
    const [DataForm, setDataForm] = useState({userName: '', password: ''});
    const handleSubmit = (event) => {
        event.preventDefault();
        if (DataForm.userName !== '') {
            if (DataForm.password !== '') {
                console.log(DataForm);
            } else {
                alert('complete el pass');
            }
        } else {
            alert('complete el username');
        }
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setDataForm({...DataForm, [name]: value});
    };
    // setTimeout(() => {  console.log("World!"); }, 2000);
    return (
        <div className="main">
            <div className="screen-loader">
                <div>
                    <img src={logo} alt="Gota"/>
                </div>
            </div>
            <div className="uiUser-container">
            </div>
            <div className="uiUser-container">
                <div className="uiUser-form">
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <div className="uiUser-profile">
                            <div className="uiUser-imageprofile">
                                <img src={profile} alt="User"/>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Usuario" name='userName'/>
                            <input type="password" placeholder="Contraseña" name='password'/>
                        </div>
                        <button>LOG IN</button>
                        <br/>
                        <Link to="/recovery" replace>Recuperar contraseña</Link>
                        <br/>
                        <Link to="/register" replace>Registrar</Link>
                    </form>
                </div>                
            </div>
        </div>
        // <div className="main">
        //     <div className="container">
        //         <div className="title"><h1>Gota</h1></div>
        //         <div className="form">
        //             <form onSubmit={handleSubmit} onChange={handleChange}>
        //                 <div>
        //                     <input type="text" placeholder="Usuario" name='userName'/>
        //                     <input type="password" placeholder="Contraseña" name='password'/>
        //                 </div>
        //                 <button>LOG IN</button>
        //                 <br/>
        //                 <Link to="/recovery" replace>Recuperar contraseña</Link>
        //                 <br/>
        //                 <Link to="/register" replace>Registrar</Link>
        //             </form>
        //         </div>
        //         <div>
        //             <span className="txt">
        //                 Sistema de Getios de productos
        //             </span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login
