import React from 'react'
import { Navigate} from 'react-router-dom'
import { UserAuth } from './../context/AuthContext'

const RouteProtect = ({children}) => {
    const {user} = UserAuth()
    console.log('protect',user);

    if (!user) {
        return <Navigate to='/login'/>
    } else {
        return children
    }
}

export default RouteProtect