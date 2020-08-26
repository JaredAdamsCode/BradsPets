
import React, {Component} from 'react';
import CUPetForm from './CUPetForm';

class AddLostPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
    return(
      <CUPetForm loggedInStatus={this.props.loggedInStatus}
        handleChange={this.handleChange} onChange={this.onChange}
        onSubmit={this.onSubmit} handleLogOut={this.props.handleLogOut} pageTitle={"Add Lost Pet"}
        type_of_animal={"Type of Animal"} description={"description"} location={"location"}
      />
    );
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  onChange = (e) => {
    e.persist()
    this.setState(() => {
        return {
            [e.target.name]: e.target.files[0]
        }
    })
  }

  onSubmit = (e) =>{
    e.preventDefault()
    const data = new FormData()
    if(this.state.image){
      let image = this.state.image;
      data.append("pet[image_url]", image);
    }

    let user_id = this.props.user.id;
    let {type_of_animal, description, location} = this.state;
    data.append("pet[type_of_animal]", type_of_animal);
    data.append("pet[description]", description);
    data.append("pet[location]", location);
    data.append("pet[user_id]", user_id);

    fetch("/pets", {
      method: 'POST',
      body: data, 
      credentials: 'include'})
    .then(response => {
      // console.log(response);
      this.redirect();
    }).catch(error => console.log("error in create pet: ", error));
  }

  redirect = () => {
    this.props.history.push('/')
  }

}
export default AddLostPet;