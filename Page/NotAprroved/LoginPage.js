import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { Button} from 'native-base';
function LoginPage ({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require('../../image/logo.png')} style={styles.logoImage}/>
            <TextInput 
                style={styles.idBox}
                placeholder={"Email"}
            />
            <TextInput 
                style={styles.pwBox}
                placeholder={"Password"}
            />
            <Button style={styles.loginButton} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
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
        justifyContent: 'center', 
        alignItems: 'center'
        
    },
    loginButtonText:{
        color:'white',
        fontSize:30
    }
})
export default LoginPage;