import React from 'react'
import Login from '../component/Login/Login';
import recovery from '../component/recovery/recovery';
import Register from '../component/Register/Register';
import useRouting from '../hooks/UseRouting'

const Home = () => {
    const SubPage = useRouting({
        "login": Login, 
        "recovery": recovery,
        "register": Register
    }, "subPage");
    return (
        <div>
            <SubPage/>
        </div>
    )
}

export default Home;
