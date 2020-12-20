import React from 'react';
import {useParams} from 'react-router-dom';
import Error404 from '../component/404/404';
import Login from "../component/Login/Login";


function useRouting(pages = {}, paramName = "", page404 = Error404, pageLogin = Login) {
    const params = useParams();
    let page = params.hasOwnProperty(paramName) ? params[paramName] : null;
    page = page === undefined ? "" : page

    if (page === null) {
        return page404;
    } else {
        if (pages.hasOwnProperty(page.toLowerCase())) {
            return pages[page];
        } else if (page === "") {
            return pageLogin;
        } else {
            return page404;
        }
    }
}

export default useRouting;
