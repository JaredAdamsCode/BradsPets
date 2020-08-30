
import React, {Component} from 'react';
import { Container, Avatar, Typography, Grid, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      errors: ''
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    if(name === "email"){
      this.setState({username: value});
    }
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {email, username, password} = this.state;
    let user = {email: email, username: username, password: password};
    axios.post("/login", {user}, {withCredentials: true})
    .then(response => {
      // console.log(response);
      if(response.data.logged_in){
        this.props.handleLogIn(response);
        this.redirect();
      }
      else{
        this.setState({errors: response.data.errors});
      }
    }).catch(error => console.log("error from login: ", error));
  }

  redirect = () => {
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        <Header loggedInStatus={this.props.loggedInStatus} 
          handleLogOut={this.props.handleLogOut}/>

      <Container component="main" maxWidth="xs">
        
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
            <Typography component="h1" variant="h5" align="left">
              Sign in
            </Typography>
            </Grid>
        </Grid>
        <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
              <form onSubmit={this.handleSubmit}>
              <input
                placeholder="email or username"
                type="text"
                name="email"
                // value={email}
                onChange={this.handleChange}
              />
              <input 
                placeholder="password"
                type="password"
                name="password"
                // value={password}
                onChange={this.handleChange}
              />
              </form>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={8}
          >
            <Grid item >
              <Button variant="contained" onClick={this.handleSubmit}>
                Login
              </Button>
              <Button component={ Link } to="/signup" variant="contained">
                Sign Up
              </Button>
            </Grid>
          </Grid>
      </Container>
      </div>
    )
  }

}


export default Login;