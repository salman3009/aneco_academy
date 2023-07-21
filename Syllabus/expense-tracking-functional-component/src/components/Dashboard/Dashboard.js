
import Table from './Table/Table';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Dashboard=()=>{

    const navigate = useNavigate();
    useEffect(()=>{
       if(!sessionStorage.getItem('login')){
           navigate('/login');
       }
    },[]);

    return(<div>Dashboard
        <Table/>
    </div>)
}

export default Dashboard;