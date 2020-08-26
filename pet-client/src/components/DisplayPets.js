
import React, {Component} from 'react';
import DisplayPetGallery from './DisplayPetGallery';
import DisplaySinglePet from './DisplaySinglePet';

class DisplayPets extends Component{
  constructor(props){
    super(props);
    this.state = {
      editPet: {},
      showOnePet: false
    }
    this.setPetInfo = this.setPetInfo.bind(this);
    this.toggleShowOnePet = this.toggleShowOnePet.bind(this);
  }

  setPetInfo(pet){
    this.setState({editPet: pet});
    this.toggleShowOnePet();
  }

  toggleShowOnePet(){
    this.setState({showOnePet: !this.state.showOnePet});
  }

  render(){
    let showOnePet = this.state.showOnePet;
    let pet = this.state.editPet;
    return (
      <div>
      {showOnePet ? <DisplaySinglePet showOnlyMyPets={this.props.showOnlyMyPets} 
        setPetInfo={this.setPetInfo} pet={pet} /> 
        : 
        <DisplayPetGallery pets={this.props.pets} showOnlyMyPets={this.props.showOnlyMyPets} 
        setPetInfo={this.setPetInfo}/>
      }
      </div>
               
    );
  }
}

export default DisplayPets;