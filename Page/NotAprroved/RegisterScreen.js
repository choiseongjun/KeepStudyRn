import React, {useState} from 'react';
import {Text,View, TextInput,TouchableOpacity, StyleSheet} from 'react-native';

function RegisterScreen () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [check, setCheck] = useState('');


    
    return(
        <>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.registerBox}
                />
                <TextInput 
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    style={styles.registerBox}
                />
                <TextInput 
                    placeholder="비밀번호 확인"
                    onChangeText={(text) => setCheck(text)}
                    value={check}
                    style={styles.registerBox}
                />                
                <TextInput 
                    placeholder="Nickname"
                    onChangeText={(text) => setNickname(text)}
                    value={nickname}
                    style={styles.registerBox}
                />
                <TouchableOpacity 
                    style={styles.registerButton}
                    >
                    <Text style={styles.registerText}>가입하기</Text>
                </TouchableOpacity>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
         
        alignItems: 'center',
        backgroundColor:'white',
        flex:1
    }
    ,
    registerButton:{
        width:"90%", 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'gray',
        marginTop:30,
        borderRadius:5
    },
    registerBox:{
        width:'90%',
        height:50,
        borderBottomWidth:0.5,
        marginTop:10
    },
    registerText:{
        color:'white',
        fontSize:20,
        
    }
})
export default RegisterScreen;

