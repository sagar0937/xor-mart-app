import React, { Component } from 'react'


export default class Logout extends Component {

    constructor(props) {
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
