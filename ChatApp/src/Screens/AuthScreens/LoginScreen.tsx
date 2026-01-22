import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthLayout } from '../../uiAssets/layouts';
import {
  EmailTextInput,
  PasswordTextInput,
} from '../../Components/ValidatedTextInput';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Enter email and password');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.replace('home');
    } catch (error: any) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <AuthLayout>
      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        Let’s Chat
      </Text>
      <View style={{ width: '92%', gap: 16 }}>
        <EmailTextInput value={email} onChangeText={setEmail} />

        <View>
          <PasswordTextInput onChangeText={setPassword} value={password} />
          <Pressable
            style={{ marginTop: 4 }}
            onPress={() => navigation.navigate('forgotPassword')}
          >
            <Text
              style={{
                textAlign: 'right',
                color: '#fff',
                fontWeight: '700',
                textDecorationLine: 'underline',
              }}
            >
              forgot password
            </Text>
          </Pressable>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#4A6CF7',
          paddingVertical: 10,
          width: '92%',
          alignItems: 'center',
          borderRadius: 25,
          alignSelf: 'center',
          elevation: 4,
        }}
        // onPress={() => navigation.navigate('users')}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 16 }}>
          Log In
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <Text style={{ color: '#A9A9A9' }}>Don't Have An Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 15,
              textDecorationLine: 'underline',
              color: '#4A6CF7',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};

const style = StyleSheet.create({
  textInputBox: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2D',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    borderColor: '#3A3A3C',
    borderWidth: 1,
    gap: 8,
    elevation: 4,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

export default LoginScreen;
