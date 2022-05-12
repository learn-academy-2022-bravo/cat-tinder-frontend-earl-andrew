import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom' 

class CatEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCat: {
              name: "",
              age: "",
              enjoys: "",
              image: ""
            },
            submitted: false
          }
        }

        handleChange = (e) => {
            let { newCat } = this.state
            newCat[e.target.name] = e.target.value
            this.setState({newCat: newCat})
          }

        handleSubmit = () => {
            this.props.updateCat(this.state.newCat, this.props.cat.id)
            this.setState({submitted: true})
          }

    render() {
        console.log(this.state);
        return (
        <>
            <h2>Edit a Cat</h2>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                    type="text"
                    name="name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                    type="number"
                    name="age"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="enjoys">Enjoys</Label>
                    <Input
                    type="text"
                    name="enjoys"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Image URL</Label>
                    <Input
                    type="text"
                    name="image"
                    />
                </FormGroup>
            </Form>

            <Button
                name="submit"
                onClick={this.handleSubmit}>
                    Edit Cat Profile
            </Button>
            {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
        </>
        );
    }
}

export default CatEdit;