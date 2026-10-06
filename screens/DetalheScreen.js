import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalheScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.foto} />
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.descricao}>{item.description}</Text>
      <Text style={styles.preco}>$ {item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f2f2f2' },
  foto: { width: 260, height: 260, borderRadius: 16, marginTop: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 16, textAlign: 'center' },
  descricao: { fontSize: 16, color: '#555', marginTop: 8, textAlign: 'center' },
  preco: { fontSize: 22, fontWeight: 'bold', color: '#774c00', marginTop: 16 },
});