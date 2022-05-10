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
import mockCats from './mockCats.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: mockCats
    }
  }


render() {
    return (
      
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catindex" component={CatIndex} />
        <Route path="/catshow" component={CatShow} />
        <Route path="/catnew" component={CatNew} />
        <Route path="/catedit" component={CatEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
  );
}
}

export default App;
