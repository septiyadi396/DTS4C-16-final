import { useEffect } from "react";

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        const authenticated = localStorage.getItem('access_token')
        let cekAuth = false
        console.log('token',authenticated);
        if (authenticated == null) {
            if (window.location.pathname != '/login' || window.location.pathname != '/register') {
                console.log('dalam',authenticated);
                // window.location.href = '/login'
            }
        } 
        else {
            if (window.location.pathname == '/login' || window.location.pathname == '/register') {
                window.location.href = '/'
            }
            // window.location.href = '/'
            // const profile = localStorage.getItem('profileId')
            // if (profile == null) {
            //     window.location.href = '/profile'
            // }
        }
    }, []);

    return (
        <>{children}</>
    )
}