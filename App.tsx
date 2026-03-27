import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="First"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#07330C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="First" 
          component={FirstScreen} 
          options={{ title: 'Big Mac' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{ title: 'Buttermilk Chicken Sandwich' }}
        />
        <Stack.Screen 
          name="Third" 
          component={ThirdScreen} 
          options={{ title: 'Job Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}