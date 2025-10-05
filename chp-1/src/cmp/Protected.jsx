import {useSelector} from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';

const Protected = ()=>{
    const {auth: {user}} = useSelector(response=>response);
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default Protected