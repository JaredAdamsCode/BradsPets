

import React, {Component} from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardMedia, Container, CardActionArea } from '@material-ui/core';
import './displaypets.css'
import UDPet from './UDPet';

class DisplaySinglePet extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    // console.log(this.props.pet);
    return(
      <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} >

        <Grid container justify="center" spacing={3}>
            <Grid item xs={6} className="container" >
              <Card variant="outlined" raised={true} id="Pet" className="displaypets-main-card" >
                <CardActionArea onClick={()=>this.props.setPetInfo(this.props.pet)}>
                <CardHeader 
                  title={this.props.pet.attributes.type_of_animal}
                />
                <CardMedia 
                  component='img'
                  image={this.props.pet.attributes.image_url}
                />
                <CardContent>
                  <Typography variant="body2">
                    {this.props.pet.attributes.description}
                  </Typography>
                  <Typography variant="body2">
                    {this.props.pet.attributes.location}
                  </Typography>

                </CardContent>
                </CardActionArea>
                {this.props.showOnlyMyPets ? <UDPet pet={this.props.pet.attributes} pet_id={this.props.pet.attributes.id} /> : null}
              </Card>

            </Grid>
          
        </Grid>
        </Grid>
        </Grid>
      </Container>
    );
  }

}
export default DisplaySinglePet;