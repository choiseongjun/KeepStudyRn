import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class CreateFabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    };
  }

  onClickCreate = () => {
    console.log(1);
  }

  render() {
    return (  
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => onClickCreate }
            >
                {/* navigation.navigate('CreatePostScreen') */}
            <Icon name="cog" />
            {/* <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button> */}
          </Fab>
        </View>
      </Container>
    );
  }
}