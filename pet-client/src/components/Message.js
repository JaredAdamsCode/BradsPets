
import React, {Component} from 'react'
import Header from './Header';
import {Button, Container, Grid, Avatar, Typography} from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Message extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let message_text = this.state.message;
    let user_id = this.props.user.id;
    let send_to_user_id = this.props.location.updateProps.user_id;
    if(user_id === send_to_user_id){
      alert("This is your listing!");
      this.redirect();
      return;
    }
    let message = {
      user_id: user_id,
      send_to_user_id: send_to_user_id,
      message_text: message_text
    };
    axios.post("/message", {message}, {withCredentials: true})
    .then(response => {
      console.log("message response: ", response);
      if(response.data.success){
        alert("Message successfully sent");
        this.redirect();
      }
      else{
        alert("Message failed to send");
        this.redirect();
      }
    }).catch(error => console.log("error from message: ", error));

  }

  redirect = () => {
    this.props.history.push('/')
  }

  render(){
    // console.log("msg props: ", this.props);
    return(
      <div>
        <Header loggedInStatus={this.props.loggedInStatus}
        handleLogOut={this.props.handleLogOut} />
        <Container component="main" maxWidth="xs">       
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
            <Avatar>
              <MailOutlineIcon />
            </Avatar>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
          <Grid item >
            <Typography component="h1" variant="h5" align="center">
              Type Your Message Below
            </Typography>
            <Typography component="h1" variant="body1" align="center">
              Be sure to include your contact information
            </Typography>
          </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={0}
          >
            <Grid item >
              <Form >
                <FormGroup>
                  <Input type="textarea" name="message" cols={30} rows={4} 
                    onChange={this.handleChange} />
                </FormGroup>
              </Form>
            </Grid>
          </Grid>
          <Grid justify='center'
          container 
          spacing={8}
          >
            <Grid item >
              <Button variant="contained" onClick={this.handleSubmit}>
                Send Message
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
export default Message;