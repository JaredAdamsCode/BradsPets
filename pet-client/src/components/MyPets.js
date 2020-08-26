
import React, {Component} from 'react';
import Header from './Header';
import FetchPets from './FetchPets';

class MyPets extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Header loggedInStatus={this.props.loggedInStatus}
        handleLogOut={this.props.handleLogOut} />
        <FetchPets user={this.props.user} showOnlyMyPets={true} />
      </div>
    );
  }


}
export default MyPets;