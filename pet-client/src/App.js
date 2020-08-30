// Contains router and most API calls

import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddLostPet from './components/AddLostPet';
import MyPets from './components/MyPets';
import UpdateLostPet from './components/UpdateLostPet';
import Message from './components/Message';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}

    }
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.getLoggedInStatus();
  }

  render(){
    return (
      <BrowserRouter> 
        <Switch>
          <Route exact path='/' render={
            props => (<Home {...props} loggedInStatus={this.state.isLoggedIn} 
              handleLogOut={this.handleLogOut} user={this.state.user}
          /> )} />
          <Route exact path='/login' render={
            props => (<Login {...props} loggedInStatus={this.state.isLoggedIn}
            handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut}/>)
          }/>
          <Route exact path='/signup' render={
            props => (<Signup {...props} loggedInStatus={this.state.isLoggedIn}
            handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut}/>)
          }/>
          <Route exact path='/addpet' render={
            props => (<AddLostPet {...props} loggedInStatus={this.state.isLoggedIn} 
            handleLogOut={this.handleLogOut} user={this.state.user}/>)
          }
          />
          <Route exact path='/mypets' render={
          props => (<MyPets {...props} loggedInStatus={this.state.isLoggedIn} 
          handleLogOut={this.handleLogOut} user={this.state.user} />)
          }
          />
          <Route exact path='/updatepet' render={
          props => (<UpdateLostPet {...props} loggedInStatus={this.state.isLoggedIn} 
          handleLogOut={this.handleLogOut} user={this.state.user} />)
          }
          />
          <Route exact path='/message' render={
          props => (<Message {...props} loggedInStatus={this.state.isLoggedIn} 
          handleLogOut={this.handleLogOut} user={this.state.user} />)
          }
          />
        </Switch>
      </BrowserRouter>
    );
  }

  handleLogIn(data){
    this.setState({isLoggedIn: true});
    this.setState({user: data.data.user});
    console.log("hlogin user: ", data.data.user);
  }

  handleLogOut(){
    this.setState({
      isLoggedIn: false, 
      user: {}
    });
  }

  getLoggedInStatus(){
    axios.get('/logged_in', {withCredentials: true})

    .then(response => {
      if(response.data.logged_in){
        this.handleLogIn(response);
      }
      else {
        this.handleLogOut();
      }
    })
    .catch(error => {
      console.log("error from get logged in status: ", error);
    })

  }

}

export default App;
