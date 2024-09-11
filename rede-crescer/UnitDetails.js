import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Platform } from 'react-native';
import unitsData from './UnitsBD.json';

export default function UnitDetailsScreen({ route, navigation }) {
  const { unit } = route.params;
  const mapUrl = Platform.select({
    ios: `maps:0,0?q=${unit.address}`,
    android: `geo:0,0?q=${unit.address}`
  });

return (
  <ScrollView style={styles.container}>
    <View style={styles.container}>

      <View>
        <Text style={styles.nome}>{unit.name}</Text>
      </View>

      <View>
        <Text style={styles.titulo}>Endereço:</Text>
        <Text style={styles.subtitulo}>{unit.address}</Text>
      </View>

      <View style={styles.button}>
        <Button onPress={() => Linking.openURL(mapUrl)} title="📌" />
      </View>

      <View>
        <Text style={styles.titulo}>
          Horário de Funcionamento:
        </Text>
        <Text style={styles.subtitulo}>
          Dias da semana: de {unit.hours.weekday}
        </Text>
        <Text style={styles.subtitulo}>
          Fins de semana: de {unit.hours.weekend}
        </Text>
      </View>

      <View>
        <Text style={styles.titulo}>Valor da mensalidade:</Text>
        <Text style={styles.subtitulo}>R${unit.monthly_fee}</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.titulo}>Telefone:</Text>
        <Text style={styles.subtitulo}>{unit.contact_phone}</Text>
        <Button onPress={() => Linking.openURL(`tel:${unit.contact_phone}`)} title="Ligar" />
      </View>

      <View style={styles.button}>
        <Button onPress={() => Linking.openURL(`whatsapp://send?phone=${unit.whatsapp}&text=Olá`)} title="WhatsApp" />
      </View>

      <View style={styles.button}>
        <Button title="Voltar" onPress={() => navigation.navigate('Units')} />
      </View>
      
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Ocupa todo o espaço disponível
    paddingHorizontal: 20,  // Espaçamento horizontal
    paddingVertical: 30,    // Espaçamento vertical
    backgroundColor: '#f5f5f5', // Fundo claro para melhor legibilidade
  },
  nome: {
    fontSize: 24,           // Aumentei o tamanho da fonte para dar mais destaque ao nome da unidade
    fontWeight: 'bold',
    color: '#333',          // Cor mais escura para contraste
    marginBottom: 20,       // Espaçamento inferior para separar dos elementos subsequentes
    textAlign: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',          // Cinza escuro para títulos
    marginBottom: 5,        // Pequeno espaçamento entre o título e o subtítulo
  },
  subtitulo: {
    fontSize: 16,
    color: '#777',          // Cor mais clara para subtítulos
    marginBottom: 20,       // Maior espaçamento inferior para separar as seções
  },
  button: {
    marginTop: 20,          // Espaçamento superior para o botão
    alignSelf: 'stretch',   // Faz o botão se ajustar à largura do contêiner
    marginBottom: 10,       // Espaçamento inferior
  },
});
