import { useEffect, useState } from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';

const URL = 'https://api.tvmaze.com/shows';

export default function ListaScreen({ navigation }) {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarSeries() {
      try {
        setErro('');

        const resposta = await fetch(URL);

        if (!resposta.ok) {
          throw new Error('Não foi possível buscar as séries.');
        }

        const json = await resposta.json();
        setSeries(json);
      } catch (error) {
        setErro('Erro ao carregar as séries. Tente novamente.');
      } finally {
        setLoading(false);
      }
    }

    buscarSeries();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (erro) {
    return <Text>{erro}</Text>;
  }

  return (
    <FlatList
      data={series}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 12 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Detalhe', {id: item.id, name: item.name})}
          style={{flexDirection: 'row',alignItems: 'center', padding: 10, marginBottom: 10,backgroundColor: '#fff', borderRadius: 8, gap: 12}}
        >
          {item.image?.medium ? (
            <Image
              source={{ uri: item.image.medium }}
              style={{width: 90, height: 125, borderRadius: 6,}}
              resizeMode="cover"
            />
          ) : (
            <View style={{width: 90, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee'}}>
              <Text>Sem imagem</Text>
            </View>
          )}

          <Text style={{ fontSize: 16, fontWeight: 'bold', flexShrink: 1 }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}