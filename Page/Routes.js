import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {Approved} from './Approved';
import {NotApproved} from './NotAprroved';

function Routes (){
    const[token, setToken] = useState(true);

    return(
        <>
            {token ? <Approved/>:<NotApproved/>}
        </>
    );
}

export default Routes;