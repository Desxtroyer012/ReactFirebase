import React,{Fragment} from 'react';

function Hola(props) {

    let variable = 1

    return (
        <Fragment>
            <h2>Hola mundo</h2>
            <h3>Probando React</h3>
            <h4>El resultado de la suma es:{variable + variable} </h4>
            
        </Fragment>
    );
}

export default Hola;