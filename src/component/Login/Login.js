import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../style.scss'

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
    return (
        <div className="main">
            <div className="container">
                <div className="title"><h1>Gota</h1></div>
                <div className="form">
                    <form onSubmit={handleSubmit} onChange={handleChange}>
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
                <div>
                    <span className="txt">
                        Sistema de Getios de productos
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login
