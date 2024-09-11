import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function ContactListScreen({ navigation }) {
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState({});

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ualberta/front-end-framework/master/src/assets/data/components/sample-news-list.json")
      .then(response => response.json())
      .then(json => {
        setData(json);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Timeout de 2 segundos
      })
      .catch(error => {
        console.log("Erro ao carregar os dados", error);
        setLoading(false);
      });
    }, []);

    return(
      <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="medium" color="#0000ff" />
        </View>
      ) : (
        <View>
        <FlatList
          data={data}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigation.navigate('Feed', {contact: item})}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.title.items.title}</Text>
            </View>
          </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 15
  },
  contact: {
    fontSize: 12,
    height: 18,
  },
  title:{
    textAlign: center,
    fontSize: 14,
    fontWeight: bold
  },
  text:{
    textAlign: center,
    fontSize: 12,
    fontWeight: light
  }
})