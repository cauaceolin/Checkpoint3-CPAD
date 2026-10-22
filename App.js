import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from './screens/ListaScreen';
import DetalheScreen from './screens/DetalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="series" component={ListaScreen} options={{ title: 'Séries' }} />
        <Stack.Screen name="Detalhe" component={DetalheScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}