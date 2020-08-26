
import React, {Component} from 'react';
import CUPetForm from './CUPetForm';

class UpdateLostPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null, 
      type_of_animal: null,
      description: null,
      location: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
    // console.log("we are here");
    // console.log("update props: ", this.props.location.updateProps);
    if(this.props.location.updateProps){
      let {type_of_animal, description, location} = this.props.location.updateProps;
      return(
        <CUPetForm loggedInStatus={this.props.loggedInStatus}
          handleChange={this.handleChange} onChange={this.onChange}
          onSubmit={this.onSubmit} pageTitle={"Update Lost Pet"}
          type_of_animal={type_of_animal}
          description={description} 
          location={location}
        />
      );
    }
    else{
      this.redirect();
    }
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
    if(this.state.type_of_animal){
      let type_of_animal = this.state.type_of_animal;
      data.append("pet[type_of_animal]", type_of_animal);
    }
    if(this.state.description){
      let description = this.state.description;
      data.append("pet[description]", description);
    }
    if(this.state.location){
      let location = this.state.location;
      data.append("pet[location]", location);
    }

    let id = this.props.location.updateProps.id;
    data.append("id", id);

    let user_id = this.props.user.id;
    data.append("pet[user_id]", user_id);

    fetch("/updatepet", {
      method: 'PATCH',
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
export default UpdateLostPet;