import React from 'react';
import {View,Text,StyleSheet,Image,TextInput} from 'react-native';
import {button, Button} from 'react-native-paper';
function LoginPage (navigation){
    return(
        <View style={styles.container}>
            <Image source={require('../image/logo.png')} style={styles.logoImage}/>
            <TextInput 
                style={styles.idBox}
                placeholder={"Email"}
            />
            <TextInput 
                style={styles.pwBox}
                placeholder={"Password"}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Feed')} style={styles.loginButton}>
                Login
            </Button>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoImage:{
        width:'100%',
        marginTop:50
    },
    idBox:{
        width:300,
        height:50,
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'white'
    },
    pwBox:{
        width:300,
        height:50,
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'white',
        marginTop:5
    },
    loginButton:{
        width:300,
        marginTop:30,
        backgroundColor:'green',
        
    }
})
export default LoginPage;