import { StyleSheet,Text, View,TextInput, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import React,{ useState } from 'react';
import axios from 'axios';
import apiConnect from '../functions/api';

const apiURL = 'http://snapi.epitech.eu:8000/';


// function registerRequest(navigation, email, password) {
//     console.log(email);
//     console.log('TRIGGERED')
//     axios({
//     method: 'post',
//     url: apiURL+'inscription',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: JSON.stringify({
//       'email': email,
//       'password': password
//     })
//   }).then((res)=>{
//         navigation.navigate('Connexion')

//     // ne s'exécute qu'en cas d'inscription réussite
//     console.log('INSCRIPTION - SUCCESS !')
//   }).catch((err)=>{
//     console.log('INSCRIPTION - FAILED')
//     console.log(err.response.data,err.response.status,err.response.headers)
//     console.log(err.response.data.data.email)
//     let errData = err.response.data.data;
//     let errKeys = Object.keys(errData);
//     errKeys.forEach((v, i) => {
//       console.log(v, errData[v])
//     });
//     // console.log(JSON.parse(err.response.data))
//   });
//   }


export function ScreenInscription (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Inscription</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.email} 
             placeholder="Email"
             onChangeText={newValue => {console.log(newValue);setEmail(newValue)}}/>
             <Text style={styles.label}>Password</Text>
            <TextInput style={styles.password} 
             placeholder="password"
             secureTextEntry={true}
             onChangeText={newValue => {console.log(newValue);setPassword(newValue)}}/>
            <View style={styles.formButton}>
            <Button onPress={
                function() {
                    //registerRequest(props.navigation, email, password);
                    //
                    apiConnect('/inscription',
                        {'Content-Type':'application/json'},
                        'post',
                        {
                            'email': email,
                            'password': password
                        },
                        (res) => {
                            console.log('INSCRIPTION - SUCCESS');
                            props.navigation.navigate('Connexion')
                        }, 
                        (err) => {
                            console.log('INSCRIPTION - FAILED');
                            console.log(err.response.data);
                        }
                        );
                    }
                } title="s'inscrire">content</Button>

            </View>
            <Text style={styles.loginText}>Vous avez déjà un compte?</Text>
            <Link to={{screen: "Connexion"}} style={styles.login}>Connexion</Link>
          
        </View>
    )
}

    const styles = StyleSheet.create ({
        container:{
            justifyContent:"center",
            width:"100%",
            height:710,
            fontSize: 60,
            backgroundColor:"#51B800",
    
        },
        titre:{
            fontSize:40,
            color:"white",
            textAlign:"center",
            marginTop:10,
        },
        login:{
            fontSize:20,
            color:"white",
            textAlign:"center",
            marginBottom:240,
            marginTop:10,
    
        },
        loginText:{
            fontSize:20,
            textAlign:"center",
    
        },
        email:{
            height:50,
            width:250,
            borderColor:"white",
            borderWidth:1,
            color:"white",
            marginHorizontal:50,
            marginVertical:10,
            borderRadius:20,
            paddingLeft:15,
        },

        password:{
            height:50,
            width:250,
            borderColor:"white",
            borderWidth:1,
            color:"white",
            marginHorizontal:50,
            marginVertical:10,
            borderRadius:20,
            paddingLeft:15,


        },
        label:{
        marginHorizontal:55,
        color:"white",
        },

        formButton:{
            backgroundColor:"#00B889",
            height:40,
            width:150,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:30,
            borderColor:"white",
            borderWidth:1,
            marginHorizontal:105,
            marginVertical:10,
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:4,
            },
            shadowOpacity:0.25,
            shadowRadius:3.84,
            elevation:5,
        

        },

    })
