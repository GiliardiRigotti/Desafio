import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Pokedex/HomeScreen';
import { ListPokemonScreen } from '../screens/Pokedex/ListPokemon';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListPokemonScreen" component={ListPokemonScreen} />
    </Stack.Navigator>
  );
}