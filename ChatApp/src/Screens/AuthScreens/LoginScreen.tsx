import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
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
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: insets.bottom + 10,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', gap: '5%' }}>
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
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#121212B3',
            width: '90%',
            borderRadius: 25,
            paddingVertical: '8%',
          }}
        >
          <View style={{ width: '92%', gap: 16 }}>
            <TextInput
              style={style.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#A9A9A9"
              onChangeText={setEmail}
            />
            <TextInput
              style={style.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#A9A9A9"
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#9112BC',
            paddingVertical: 12,
            width: '92%',
            alignItems: 'center',
            borderRadius: 25,
            alignSelf: 'center',
          }}
          // onPress={() => navigation.navigate('users')}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              textDecorationLine: 'underline',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    color: 'white',
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
});

export default LoginScreen;
