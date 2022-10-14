import { StyleSheet,Text, View, type } from 'react-native';
import { Link } from '@react-navigation/native';
import React,{ useEffect, useRef, useState } from 'react';


export function ScreenUser (props) {

    return (
        <View style={styles.container}>
              <Text style={styles.titre}>Bienvenue</Text>
            <Link to={{screen: "Camera"}} style={styles.camera}>Camera</Link>
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
       
    },
    buttonContainer:{
        width:85,
        backgroundColor:"white",
        height:20,
        textAlign:"center",
    },
    camera:{
        fontSize:20,
        color:"white",
        textAlign:"center",
        marginBottom:240,
        marginTop:10,
    }  
})