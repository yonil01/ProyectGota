import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Login = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="title"><h1>Gota</h1></div>
                <div className="form">
                    <form>
                        <div>
                            <input type="text" placeholder="Usuario" />
                            <input type="password" placeholder="Contraseña" />
                        </div>
                        <button type="submit">LOG IN</button>
                        <br />
                        <Link to="/recovery" replace>Recuperar contraseña</Link>
                        <br />
                        <Link to="/register" replace>Registrar</Link>
                    </form>
                </div>
                <div className="txt"></div>
            </div>
        </div>
    )
}

export default Login
