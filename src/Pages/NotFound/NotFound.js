import React, { Component } from 'react';
import NotFoundImg from '../../Assets/notfound.png'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <>
            <div className="text">
                <h2>Page Not Found</h2>
            </div>
            <div className='notfound-img'>
                <img src={NotFoundImg} />       
            </div>
            
            </>
        );
    }
}

export default NotFound;