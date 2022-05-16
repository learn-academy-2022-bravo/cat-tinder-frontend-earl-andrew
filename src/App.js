import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import CatIndex from './Pages/CatIndex';
import CatShow from './Pages/CatShow';
import CatNew from './Pages/CatNew';
import CatEdit from './Pages/CatEdit';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound/NotFound';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount () {
    this.readCat()
  }

  readCat= () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => this.setState({cats: payload}))
    .catch(errors => console.log('cat read error: ', errors))
  }

  createCat = (newlyCreatedCat) => {
    fetch ("http://localhost:3000/cats", {
      body: JSON.stringify(newlyCreatedCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then( () => this.readCat() )
    .catch(errors => console.log('cat create error: ', errors))
    }
  

  updateCat = (cat, id) => {
    fetch (`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then( () => this.readCat() )
      .catch(errors => console.log('cat update error: ', errors))
    }


    deleteCat = (id) => {
      fetch(`http://localhost:3000/cats/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then( () => this.readCat())
      .catch(errors => console.log("cat delete errors:", errors))
    }
  



render() {
    return (
      
    <Router>
      <Header/>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route
        path="/catindex" 
        render={(props) => <CatIndex cats={this.state.cats} />} 
        />

        <Route 
          path="/catshow/:id"
          render={(props) => { 
            let id= +props.match.params.id
            let cat = this.state.cats.find(catobject => catobject.id === id)
            console.log(cat);
            return <CatShow cat={cat} deleteCat={this.deleteCat} />
          }} 
        />

        <Route
            path="/catnew"
            render={() => {
              return <CatNew createCat={this.createCat}/>
            }}
        />
        
        
        <Route path="/catedit/:id" 
            render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatEdit updateCat={this.updateCat} cat={cat} />
            }} 
        />
        
        <Route component={NotFound}/>

      </Switch>
      <Footer />
    </Router>
  );
}
}

export default App;
