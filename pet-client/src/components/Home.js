
import React, {Component} from 'react';
import FetchPets from './FetchPets';
import Header from './Header';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Header loggedInStatus={this.props.loggedInStatus}
        handleLogOut={this.props.handleLogOut} />
        <FetchPets showOnlyMyPets={false}/>       
      </div>
    );
  }

  

}

export default Home;