
import { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

export default function DetalheScreen({ route }) {
  const { id, name } = route.params;

  const [episodios, setEpisodios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarEpisodios() {
      setLoading(true);

      try {
        setErro('');

        const resposta = await fetch(
          `https://api.tvmaze.com/shows/${id}/episodes`
        );

        if (!resposta.ok) {
          throw new Error('Falha ao buscar episódios.');
        }

        const json = await resposta.json();
        setEpisodios(json);
      } catch (error) {
        console.error('Erro ao buscar episódios:', error);
        setErro('Não foi possível carregar os episódios.');
      } finally {
        setLoading(false);
      }
    }

    buscarEpisodios();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (erro) {
    return <Text>{erro}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
        {name}
      </Text>

      <FlatList
        data={episodios}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text>Nenhum episódio encontrado.</Text>
        }
        renderItem={({ item }) => (
          <View
            style={{padding: 12,marginBottom: 8,backgroundColor: '#fff',borderRadius: 8}}
          >
            <Text> Temporada {item.season} · Episódio {item.number ?? '—'}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
