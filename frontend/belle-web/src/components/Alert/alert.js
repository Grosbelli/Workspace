import React from 'react';
import { Alert } from 'reactstrap';

const Alerta = (props) => {
    return (
        <div>
            <Alert color="danger">
                {props.text}
            </Alert>
        </div>
    )
}

export default Alerta; 

