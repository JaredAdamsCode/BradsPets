import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


class AddLostPetButton extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.addPet = this.addPet.bind(this);
  }



  addPet(){
    if(!this.props.loggedInStatus){
      alert("You must be logged in to add a lost pet");
    }
  }

  render(){
    return(
      <div>
        {this.props.loggedInStatus ? <Button onClick={this.addPet} variant="contained" component={Link} to="/addpet">
          Add Lost Pet
        </Button> :
        <Button onClick={this.addPet} variant="contained" component={Link} to="/login">
        Add Lost Pet
      </Button>
        }

      </div>
    );
  }

  

}
export default AddLostPetButton;