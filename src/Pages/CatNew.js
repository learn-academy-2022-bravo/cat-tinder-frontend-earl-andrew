import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom' 

class CatNew extends Component {
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
        const { newCat } = this.state
        newCat[e.target.name] = e.target.value
        this.setState({newCat: newCat})
      }
    
      handleSubmit = () => {
        this.props.createCat(this.state.newCat)
        this.setState({submitted: true})
      }


    render() {
        return (
            <>
            <h2>Create a New Cat</h2>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="text"
                  name="age"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="enjoys">Enjoys</Label>
                <Input
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
            <Button onClick={this.handleSubmit} name="submit">
              Submit Cat
            </Button>
            { this.state.submitted && <Redirect to="/catindex"/> }
            </>
        );
    }
}

export default CatNew;