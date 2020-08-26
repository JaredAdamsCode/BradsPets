import React, {Component} from 'react';
import {Container, Button, Grid, Typography, Avatar} from '@material-ui/core';
import {PersonAdd} from '@material-ui/icons';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';


class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      errors: ''
    }

  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {email, username, password, password_confirmation} = this.state;
    let user = {
      username: username, 
      email: email, 
      password: password, 
      password_confirmation: password_confirmation
    };
    axios.post("/users", {user}, {withCredentials: true})
    .then(response => {
      console.log("new user response: ", response);
      if(response.data.success){
        this.props.handleLogIn(response.data.user);
        this.redirect();
      }
      else{
        this.setState({errors: response.data.errors});
      }
    }).catch(error => console.log("error from signup: ", error));

  }

  redirect = () => {
    this.props.history.push('/')
  }

  render(){
    return(
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
              <PersonAdd />
            </Avatar>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
            <Typography component="h1" variant="h5" align="left">
              Create Account
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
                placeholder="username"
                type="username"
                name="username"
                onChange={this.handleChange}
              />
              </form>
              </Grid>
              </Grid>
              <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
              <form onSubmit={this.handleSubmit}>
              <input
                placeholder="email"
                type="text"
                name="email"
                onChange={this.handleChange}
              />
              </form>
              </Grid>
              </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >  
            <form onSubmit={this.handleSubmit}>    
              <input 
                placeholder="password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              </form>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >  
            <form onSubmit={this.handleSubmit}>    
              <input 
                placeholder="confirm password"
                type="password"
                name="password_confirmation"
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
                Create Account
              </Button>
              <Button component={ Link} to="/" variant="contained">
                Cancel
              </Button>
            </Grid>
          </Grid>
      </Container>
      </div>
    );
  }

}

export default Signup;