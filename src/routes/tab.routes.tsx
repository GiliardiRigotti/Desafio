import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex } from '../screens/Pokedex';
import { WebViewScreen } from '../screens/WebViewScreen';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export function TabRoutes() {
    const sizeIcon = 30
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Pokedex') {
                        return (
                            <Icon
                                name='pokeball'
                                size={sizeIcon}
                                color={focused ? 'tomato' : 'gray'}
                            />
                        );
                    } else if (route.name === 'WebView') {
                        return (
                            <Icon
                                name='linkedin'
                                size={sizeIcon}
                                color={focused ? 'blue' : 'gray'}
                            />
                        );
                    }
                },
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="Pokedex" component={Pokedex} />
            <Tab.Screen name="WebView" component={WebViewScreen} />
        </Tab.Navigator>
    )
}