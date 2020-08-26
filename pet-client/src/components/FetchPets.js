
import React, {Component} from 'react';
import axios from 'axios';
import DisplayPets from './DisplayPets';

class FetchPets extends Component{
  constructor(props){
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount(){
    this.fetchPets();
  }

  fetchPets(){
    if(!this.props.showOnlyMyPets){
      axios.get("/pets")
      .then(response => {
      this.setState({pets: response.data.data});
      }).catch(error => console.log("error in fetch pets: ", error));
    }
    else{
      
      axios.get("/mypets", {params:{user_id: this.props.user.id}}, {withCredentials: true})
      .then(response => {
        // console.log("mypets resp: ", response);
        this.setState({pets: response.data.data});
      }).catch(error => console.log("error in fetch pets: ", error));
    }
  }

  render(){
    let pets = this.state.pets;
    return (
      <div>
      {pets.length > 0 ? <DisplayPets pets={pets} showOnlyMyPets={this.props.showOnlyMyPets}/> : null}
      </div>
    );
  }
}

export default FetchPets;