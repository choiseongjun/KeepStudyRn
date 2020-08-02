import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { Button} from 'native-base';
function LoginPage ({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    return(
        <View style={styles.container}>
            <Image source={require('../../image/logo.png')} style={styles.logoImage}/>
            <TextInput 
                style={styles.idBox}
                placeholder={"Email"}
                onChangeText={(text)=>setEmail(text)}
                value={email}
            />
            <TextInput 
                style={styles.pwBox}
                placeholder={"Password"}
                onChangeText={(text)=>setPassword(text)}
                value={password}
            />
            <Button style={styles.loginButton} >
                <TouchableOpacity>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </Button>
            <TouchableOpacity 
                style={styles.resister}
                onPress={() => navigation.navigate('Register')}
                >
                <Text>if you don't have an account please register,</Text>
                <View style={{flexDirection:'row'}}>
                    <Text>Click here! </Text>        
                    <Text style={styles.resisterText}>회원가입</Text>
                </View>
     
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        alignItems:'center', 
        flex:1
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
        backgroundColor:'gray',
        justifyContent: 'center', 
        alignItems: 'center'
        
    },
    loginButtonText:{
        color:'white',
        fontSize:30
    },
    resister:{
        position:'absolute',
        bottom:40,
        flex:1
    },
    resisterText:{
        textDecorationLine:'underline'
    }
})
export default LoginPage;