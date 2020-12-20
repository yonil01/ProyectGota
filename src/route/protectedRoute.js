import React from "react";
import { Route, Redirect } from 'react-router-dom';
// import { getToken } from "../api/auth";
const isAuth = () => {
    const token = sessionStorage.getItem('token');
    // const auth = getToken();
    return token !== null;
};
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { message: "error a la hora autentificación" },
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;
