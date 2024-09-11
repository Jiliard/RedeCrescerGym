import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('./assets/logo.png')} />
        <Text style={styles.title}>Rede Crescer</Text>
      </View>
      <View style={styles.button}>
        <Button title="Ver Notícias" onPress={() => navigation.navigate('Feed')} />
      </View>
      <View style={styles.button}>
        <Button title="Ver Unidades" onPress={() => navigation.navigate('Units')} />
      </View>
      <View style={styles.button}>
        <Button title="Ver VideoAulas" onPress={() => navigation.navigate('Class')} />
      </View>
      <View style={styles.button}>
        <Button title="Sair" onPress={() => BackHandler.exitApp() } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    padding: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    padding: 10
  }
});