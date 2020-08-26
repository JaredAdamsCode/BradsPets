
import React, {Component} from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AccountMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null});
  }

  logout = () =>{
    this.handleClose();
    axios.delete("/logout", {withCredentials: true})
    .then(response => {
      console.log(response);
      if(response.data.logged_out){
        this.props.handleLogOut();
      }
      else{
        alert("logout failed");
      }

    }).catch(error => console.log("error from logout: ", error));
  }

  render(){
    return(
      <div>
        <IconButton aria-label="Account Circle" aria-haspopup="true" onClick={this.handleClick}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
        >
          <MenuItem component={ Link } to="/mypets">My Pets</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </Menu>

      </div>

    );
  }

}
export default AccountMenu;