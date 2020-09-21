import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loja from './Loja';

const Main = () => {
    return (         
            <main className="main">                
                    {/*Compomente Routes contém as telas HomeScreen*/}
                <Switch>
                    <Route path="/" exact={true} component={Loja} /> 
                </Switch>                                
            </main>  
    )
}

export default Main