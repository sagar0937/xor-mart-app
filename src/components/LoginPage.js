import React from 'react'
import {useHistory  } from 'react-router-dom';
import { ValidatedLoginForm } from "./Validate";

export const LoginPage = () => {
    const history = useHistory();
    return (
        <div>
            <ValidatedLoginForm name={history}/>
        </div>
    )
}
