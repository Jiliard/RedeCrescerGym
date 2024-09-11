import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import unitsData from './UnitsBD.json';

export default function UnitsListScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(unitsData);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('UnitDetails', { unit: item })}>
                <View>
                  <Text style={styles.unit}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unit: {
    fontSize: 18,
    height: 44,
  },
});
