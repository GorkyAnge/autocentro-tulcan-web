import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const { usuario } = useAuth();
    if(usuario){
        return children
    }else{
        return <Navigate replace to={'/'}/>
    }
}
 
export default PrivateRoute;