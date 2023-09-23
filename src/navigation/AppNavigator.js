import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { WelcomeScreen, RecipeListScreen } from '../screens';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
