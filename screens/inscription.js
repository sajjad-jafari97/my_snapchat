import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Linking } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.textB}>Snapgrame</Text>
      <StatusBar style="auto" />
      <View>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('/screens/inscription.js')}>
        S'inscrire
      </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#60B575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textB:{
    fontSize:'20px',
    
  },

});
