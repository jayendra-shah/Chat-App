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
import firestore from '@react-native-firebase/firestore';

const SignupScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      // 1️⃣ Create auth user
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const uid = userCredential.user.uid;

      // 2️⃣ Save user profile to Firestore
      await firestore().collection('users').doc(uid).set({
        fullName,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // 3️⃣ Navigate to Home
      navigation.navigate('home');
    } catch (error) {
      Alert.alert('Signup Error', error.message);
    }
  };

  const insets = useSafeAreaInsets();
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
          Create Your Account
        </Text>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            gap: 12,
            backgroundColor: '#121212',
            width: '90%',
            borderRadius: 25,
            paddingVertical: '8%',
          }}
        >
          <View style={{ width: '92%', gap: 16 }}>
            <TextInput
              style={style.textInput}
              placeholder="Enter your fullname"
              placeholderTextColor="#A9A9A9"
              onChangeText={setFullName}
            />
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
            <TextInput
              style={style.textInput}
              placeholder="confirm your password"
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
          onPress={handleSignup}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#A9A9A9' }}>Already Have An Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              textDecorationLine: 'underline',
            }}
          >
            Login
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

export default SignupScreen;
