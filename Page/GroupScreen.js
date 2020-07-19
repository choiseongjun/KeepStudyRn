import React from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
function GroupScreen() {
    return (
        <Container>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source= {require('../image/test.jpeg')} />
              </Left>
              <Body>
                <Text>1번모임</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source= {require('../image/test.jpeg')} />
              </Left>
              <Body>
                <Text>1번모임</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source= {require('../image/test.jpeg')} />
              </Left>
              <Body>
                <Text>1번모임</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
      </Container>
    )
}

export default GroupScreen
