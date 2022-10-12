import { StyleSheet,Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
export function ScreenHome (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Titre}>Snapgrame</Text>
            <Link to={{screen: "Inscription"}} style={styles.register}>S'inscrire</Link>
            <Text style={styles.loginText}> Vous avez déjà un compte?</Text>
            <Link to={{screen: "Connexion"}} style={styles.login}>Connexion</Link>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent:"center",
        width:"100%",
        height:710,
        backgroundColor:"#D4E206",
        fontSize: 60,
        
    },
    Titre:{
        fontSize:40,
        color:"white",
        textAlign:"center",
    },
    register:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        marginTop:20,

    },
    login:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        marginBottom:240,
        marginTop:5,

    },
    loginText:{
        fontSize:20,
        textAlign:"center",
        marginTop:20,

    }
 })