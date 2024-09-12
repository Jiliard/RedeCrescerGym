import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Platform } from 'react-native';

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

        <View style={styles.separator} />

        <View>
          <Text style={styles.titulo}>Endereço:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(mapUrl)}>
            <Image 
              style={styles.imagem}
              source={require('./assets/maps.jpeg')}
            />
          </TouchableOpacity>
          <Text style={styles.subtitulo}>{unit.address}</Text>
        </View>

        <View style={styles.separator} />

        <View>
          <Text style={styles.titulo}>Horário de Funcionamento:</Text>
          <Text style={styles.subtitulo}>Dias da semana: de {unit.hours.weekday}</Text>
          <Text style={styles.subtitulo}>Fins de semana: de {unit.hours.weekend}</Text>
        </View>

        <View style={styles.separator} />

        <View>
          <Text style={styles.titulo}>Valor da mensalidade:</Text>
          <Text style={styles.subtitulo}>R${unit.monthly_fee}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.button}>
          <Text style={styles.titulo}>Telefone:</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${unit.contact_phone}`)}>
              <Text style={styles.subtitulo}>{unit.contact_phone}</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.button}>
          <Button onPress={() => Linking.openURL(`whatsapp://send?phone=${unit.whatsapp}&text=Olá`)} title="WhatsApp" />
        </View>

        <View style={styles.separator} />

        <View style={styles.button}>
          <Button title="Voltar" onPress={() => navigation.navigate('Units')} />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  imagem: {
    width: '100%',           // Ajusta a largura da imagem para 100% do contêiner
    height: 150,             // Define uma altura menor para a imagem
    resizeMode: 'cover',     // Ajusta a imagem para cobrir o espaço disponível
    borderRadius: 10,        // Adiciona bordas arredondadas
    marginVertical: 10,      // Adiciona espaçamento vertical
    borderColor: '#ddd',     // Define a cor da borda
    borderWidth: 1,          // Adiciona uma borda fina
    alignSelf: 'center',     // Centraliza a imagem horizontalmente
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,      // Espaçamento vertical para a linha
  },
});
