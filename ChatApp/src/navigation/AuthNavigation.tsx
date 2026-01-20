import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import SignupScreen from '../Screens/AuthScreens/SignupScreen';

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'login'}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={'signup'}
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
