import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from "react-router-dom";



class CatIndex extends Component {
    render() {
        console.log(this.props);
        return (
            <>
            <h3>Meet the Cats!</h3>
                <br />
                    <Col sm="6">
                        {this.props.cats && this.props.cats.map(cat => {
                        return(
                        <NavLink to={`/catshow/${cat.id}`} body key={cat.id}>
                        <CardTitle>
                        <h4>{cat.name}</h4>
                        </CardTitle>
                        </NavLink>
                )
            })}
            </Col>       
            </>
        );
    }
}

export default CatIndex;