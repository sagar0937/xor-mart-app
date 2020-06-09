import React, { Component } from 'react'


export default class Logout extends Component {

    constructor(props) {debugger
        super(props);
      localStorage.removeItem("token");
    }
    render() {
        window.location.href='/';
        return (
            <div>
                
            </div>
        )
    }
}
