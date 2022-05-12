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
import cats from './mockCats.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }

  createCat = (newlyCreatedCat) => {
    console.log(newlyCreatedCat)
  }

  updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
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
            return <CatShow cat={cat} />
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
