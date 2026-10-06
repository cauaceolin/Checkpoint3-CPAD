import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dados = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    price: 9.99,
    thumbnail:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    images: [
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    ],
  },
  {
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    price: 19.99,
    thumbnail:
      'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
    images: [
      'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp',
    ],
  },
];

export default function ListaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detalhe', { item })}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.title}</Text>
              <Text style={styles.preco}>$ {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 10,
  },
  foto: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 15, color: '#774c00', marginTop: 4 },
});