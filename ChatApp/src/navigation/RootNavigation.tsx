import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../Screens/ChatScreen';
import HomeScreen from '../Screens/HomeScreen';
import AuthNavigation from './AuthNavigation';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={'auth'}
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={'home'}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={'chat'}
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
