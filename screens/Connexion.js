import { StyleSheet,Text, View,TextInput, Button } from 'react-native';
import { Link } from '@react-navigation/native';

export function ScreenConnexion (props) {
    return(
    <View style={styles.container}>
            <Text style={styles.titre}>Connexion</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.email} 
             placeholder="email@gmail.com" />
             <Text style={styles.label}>Password</Text>
            <TextInput style={styles.password} 
             placeholder="password" />
            <View style={styles.formButton}>
            <Text>Se connecter</Text>
            </View>
            <Text style={styles.registerText}>Vous n'avez pas encore crée votre compte?</Text>
            <Link to={{screen:"Inscription"}} style={styles.register}>S'inscrire</Link>
          
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
        register:{
            fontSize:20,
            color:"white",
            textAlign:"center",
            marginBottom:240,
            marginTop:10,
    
        },
        registerText:{
            fontSize:15,
            textAlign:"center",
            marginTop:10,
    
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
