
import React, {Component} from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom';

class ContactIcon extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <IconButton component={ Link } to={{pathname: "/message", updateProps: this.props.pet}}>
        <MailOutlineIcon />
      </IconButton>
    );
  }

}
export default ContactIcon;