import React from 'react';
import { Image,ScrollView,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

function HomeScreen({navigation}) {
    return (
        <Container>
        
        <ScrollView>
          <Card>
            <CardItem> 
              <Left>
                <Thumbnail source= {require('../image/test.jpeg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity onPress={() => navigation.navigate('TimeLineDetail')}>
                <CardItem cardBody>
                    <Image 
                        source= {require('../image/test.jpeg')} style={{height: 200, width: null, flex: 1}} >
                    </Image>
                </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>  
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem> 
              <Left>
                <Thumbnail source= {require('../image/test.jpeg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source= {require('../image/test.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>  
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem> 
              <Left>
                <Thumbnail source= {require('../image/test.jpeg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source= {require('../image/test.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>  
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
export default HomeScreen;