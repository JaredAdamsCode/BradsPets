
import React, {Component} from 'react';
import { Container, Avatar, Typography, Grid, Button } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import {Link} from 'react-router-dom';
import Header from './Header';

class CUPetForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <Header loggedInStatus={this.props.loggedInStatus} handleLogOut={this.props.handleLogOut}/>

      <Container component="main" maxWidth="xs">
      
      <Grid justify='center'
      container 
      spacing={0}
      >
        <Grid item >
        <Avatar>
          <PetsIcon />
        </Avatar>
        </Grid>
      </Grid>
      <Grid justify='center'
        container 
        spacing={0}
        >
          <Grid item >
          <Typography component="h1" variant="h5" align="left">
            {this.props.pageTitle}
          </Typography>
          </Grid>
      </Grid>

      <Grid justify='center'
        container 
        spacing={0}
        >
          <Grid item >
            <form onSubmit={this.props.handleSubmit}>
            <input type="text" placeholder={this.props.type_of_animal} name="type_of_animal" onChange={this.props.handleChange}/>
            </form>
          </Grid>
      </Grid>

      <Grid justify='center'
        container 
        spacing={0}
        >
          <Grid item >
            <form onSubmit={this.props.handleSubmit}>
            <input type="text" placeholder={this.props.description} name="description" onChange={this.props.handleChange}/>
            </form>
          </Grid>
      </Grid>

      <Grid justify='center'
        container 
        spacing={0}
        >
          <Grid item >
            <form onSubmit={this.props.handleSubmit}>
            <input type="text" placeholder={this.props.location} name="location" onChange={this.props.handleChange}/>
            </form>
          </Grid>
      </Grid>
      <Grid justify='center'
        container 
        spacing={0}
        >
          <Grid item >
            <form onSubmit={this.props.handleSubmit}>
            <label>Image Upload: </label>
            <input type="file" name="image" onChange={this.props.onChange}/>
            </form>
          </Grid>
      </Grid>
      <Grid justify='center'
        container 
        spacing={8}
        >
          <Grid item >
            <Button variant="contained" onClick={this.props.onSubmit}>
              Add Pet
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
export default CUPetForm;