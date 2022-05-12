import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { NavLink } from "react-router-dom";

class CatShow extends Component {
    render() {
        let { cat } = this.props
        return (
            <>
                <h2>Cat Show</h2>

                <p>{cat.name}</p>
                <p>{cat.age}</p>
                <p>{cat.enjoys}</p>
                <img src={cat.image} width="200px" />

                <NavLink to={`/catedit/${this.props.cat.id}`}>
                <Button>Edit Cat Profile</Button>
                </NavLink>
            </>
        );
    }
}

export default CatShow;