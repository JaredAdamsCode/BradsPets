
import React, {Component} from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardMedia, Container, CardActionArea } from '@material-ui/core';
import './displaypets.css'
import UDPet from './UDPet';
import ContactIcon from './ContactIcon';

class DisplayPetGallery extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Container>
        <Typography variant="body1">
          Brad is a man on a mission to reunite lost pets with their families. If you have found a lost
          pet, click the link above to add it here. If you see your missing pet, click the email icon 
          and Brad will connect you with whoever listed your pet. 
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} >

        <Grid container justify="center" spacing={3}>
          {this.props.pets.length > 0 && this.props.pets.map((pet) => (
            <Grid item xs={6} key={pet.id} className="container" >
              <Card variant="outlined" raised={true} id="Pet" className="displaypets-main-card" >
                <CardActionArea onClick={()=>this.props.setPetInfo(pet)}>
                <CardHeader 
                  title={pet.attributes.type_of_animal}
                />
                <CardMedia 
                  component='img'
                  image={pet.attributes.image_url}
                />
                <CardContent>
                  <Typography variant="body2">
                    {pet.attributes.description}
                  </Typography>
                  <Typography variant="body2">
                    {pet.attributes.location}
                  </Typography>

                </CardContent>
                </CardActionArea>
                {this.props.showOnlyMyPets ? <UDPet pet={pet.attributes} pet_id={pet.attributes.id}/> : <ContactIcon pet={pet.attributes}/>}
              </Card>

            </Grid>
          ))}
        </Grid>
        </Grid>
        </Grid>
      </Container>
    );
  }

}
export default DisplayPetGallery;