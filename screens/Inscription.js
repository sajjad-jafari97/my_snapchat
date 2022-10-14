import { StyleSheet,Text, View,TextInput, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import React,{ useState } from 'react';

export function ScreenInscription (props) {

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Inscription</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.email} 
             placeholder="email@gmail.com" 
             />
             <Text style={styles.label}>Password</Text>
            <TextInput style={styles.password} 
             placeholder="password" />
            <View style={styles.formButton}>
            <Text>S'inscrire</Text>
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
