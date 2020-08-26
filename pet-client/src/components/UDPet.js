
import React, {Component} from 'react';
import { IconButton, Container, Button } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import {Link} from 'react-router-dom';


class UDPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      openDialog: false
    }
    this.toggleDialog = this.toggleDialog.bind(this);
    this.deletePet = this.deletePet.bind(this);
  }

  toggleDialog(){
    this.setState({openDialog: !this.state.openDialog});
  }

  deletePet(){
    this.toggleDialog();
    let pet_id = this.props.pet_id;
    axios.delete("/mypets", {params:{id: pet_id}}, {withCredentials: true})
      .then(response => {
        console.log("delete pet resp: ", response);
        // this.setState({pets: response.data.data});
      }).catch(error => console.log("error in fetch pets: ", error));

  }

  render() {
    return (
      <Container >
        <IconButton component={Link} to={{pathname: "/updatepet", updateProps: this.props.pet}}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={this.toggleDialog}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={this.state.openDialog}
          onClose={this.toggleDialog}
        >
          <DialogTitle>
            {"Are you sure?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deleting this pet is permanent and cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deletePet}>
              Delete Pet
            </Button>
            <Button onClick={this.toggleDialog}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

}
export default UDPet;