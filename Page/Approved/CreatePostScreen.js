import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
import {
    FlatList,
    Text,
    TextInput,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
  } from 'react-native';

export default class CreatePostScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selected: "key1"
    // };
  }
//   onValueChange(value: string) {
//     this.setState({
//       selected: value
//     });
//   }
  render() {
    return (
    //   <Container>
    //     <Header />
    //     <Content>
    //       <Form>
    //         <Picker
    //           renderHeader={backAction =>
    //             <Header style={{ backgroundColor: "#f44242" }}>
    //               <Left>
    //                 <Button transparent onPress={backAction}>
    //                   <Icon name="arrow-back" style={{ color: "#fff" }} />
    //                 </Button>
    //               </Left>
    //               <Body style={{ flex: 3 }}>
    //                 <Title style={{ color: "#fff" }}>Your Header</Title>
    //               </Body>
    //               <Right />
    //             </Header>}
    //           mode="dropdown"
    //           iosIcon={<Icon name="arrow-down" />}
    //           selectedValue={this.state.selected}
    //           onValueChange={this.onValueChange.bind(this)}
    //         >
    //           <Picker.Item label="Wallet" value="key0" />
    //           <Picker.Item label="ATM Card" value="key1" />
    //           <Picker.Item label="Debit Card" value="key2" />
    //           <Picker.Item label="Credit Card" value="key3" />
    //           <Picker.Item label="Net Banking" value="key4" />
    //         </Picker>
    //       </Form>
    //     </Content>
    //   </Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Left>  
                <Text>제목 : </Text>
                <TextInput></TextInput>
            </Left>
            <Left> 
                <Text>내용 : </Text>
                <TextInput></TextInput>
            </Left>
            <Left>  
                <Text>이미지 업로드 : </Text>
                <TextInput></TextInput>
            </Left>
        </View>

    );
  }
}

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { Container, Header, Content, Icon, Picker, Form } from "native-base";

// // function CreatePostScreen() {
// //     return (
// //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //             <Text>Details Screen</Text>
// //         </View>
// //     );
// // }
// // export default CreatePostScreen;

// export default class CreatePostScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selected: "key3"
//         };
//     }
//     onValueChange(value) {
//         this.setState({
//             selected: value
//         });
//         console.log(1)
//     }
//     render() {
//         return (
//             <Container>
//                 <Header />
//                 <Content>
//                 <Form>
//                     <Picker
//                     renderHeader={backAction =>
//                         <Header style={{ backgroundColor: "#FFFFFF" }}>
//                             <Left>
//                                 <Button transparent onPress={backAction}>
//                                 <Icon name="arrow-back" style={{ color: "#fff" }} />
//                                 </Button>
//                             </Left>
//                             <Body style={{ flex: 3 }}>
//                                 <Title style={{ color: "#fff" }}>Your Header</Title>
//                             </Body>
//                             <Right />
//                         </Header>}
//                     mode="dropdown"
//                     iosIcon={<Icon name="arrow-down" />}
//                     selectedValue={this.state.selected}
//                     onValueChange={this.onValueChange.bind(this)}
//                     >
//                     <Picker.Item label="Wallet" value="key0" />
//                     <Picker.Item label="ATM Card" value="key1" />
//                     <Picker.Item label="Debit Card" value="key2" />
//                     <Picker.Item label="Credit Card" value="key3" />
//                     <Picker.Item label="Net Banking" value="key4" />
//                     </Picker>
//                 </Form>
//                 </Content>
//             </Container>
//         );
//     }
// }

