import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import SignupScreen from '../Screens/AuthScreens/SignupScreen';
import ChatScreen from '../Screens/ChatScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={'login'}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={'signup'}
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name={'chat'} component={ChatScreen} options={{title:'Recevier Name'}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
