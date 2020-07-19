import React,{Component} from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList
  } from 'react-native';
  

class TimeLineDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          data:[
            {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
          ]
        }
      }
      
      render(){
                return (
                    <Container>
                    
                    <Card style={{flex: 0}}>
                        <CardItem>
                        <Left>
                            <Thumbnail source= {require('../../image/test.jpeg')} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        {/* 피드 대문 이미지 */}
                        <Image 
                            source={{ uri: `https://images.unsplash.com/photo-1595074475099-633660478a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60` }} 
                            style={{ height:200, width:null, flex: 1 }} />
                        </CardItem> 
                        
                        <CardItem>
                        <Body> 
                            <Text>
                            오늘의 공부인증 테스트
                            </Text>
                        </Body>
                        </CardItem>
                    
                        <CardItem>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="logo-github" />
                            <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                        </CardItem>
                    </Card>
                    <FlatList
                    style={styles.root}
                    data={this.state.data}
                    extraData={this.state}
                    ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator}/>
                    )
                    }}
                    keyExtractor={(item)=>{
                    return item.id;
                    }}
                    renderItem={(item) => {
                    const Notification = item.item;
                    return(
                        <View style={styles.container}>
                        <TouchableOpacity onPress={() => {}}>
                            <Image style={styles.image} source={{uri: Notification.image}}/>
                        </TouchableOpacity>
                        <View style={styles.content}>
                            <View style={styles.contentHeader}>
                            <Text  style={styles.name}>{Notification.name}</Text>
                            <Text style={styles.time}>
                                9:58 am
                            </Text>
                            </View>
                            <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                        </View>
                        </View>
                    );
                    }}/>
                </Container>
                
                )
      }
}
const styles = StyleSheet.create({
    root: {
      backgroundColor: "#ffffff",
      marginTop:10,
    },
    container: {
      paddingLeft: 19,
      paddingRight: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6
    },
    separator: {
      height: 1,
      backgroundColor: "#CCCCCC"
    },
    image:{
      width:45,
      height:45,
      borderRadius:20,
      marginLeft:20
    },
    time:{
      fontSize:11,
      color:"#808080",
    },
    name:{
      fontSize:16,
      fontWeight:"bold",
    },
  });  
  
export default TimeLineDetail
