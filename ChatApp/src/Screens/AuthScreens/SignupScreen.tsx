import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthLayout } from '../../uiAssets/layouts';
import {
  CloseEyeIcon,
  MailIcon,
  OpenEyeIcon,
  PasswordIcon,
  UserIcon,
} from '../../uiAssets/icons';

const SignupScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeOn, setEyeOn] = useState(false);

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
    } catch (error: any) {
      Alert.alert('Signup Error', error.message);
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
        Create Your Account
      </Text>

      <View style={{ width: '92%', gap: 16 }}>
        <View style={style.textInputBox}>
          <UserIcon />
          <TextInput
            style={style.textInput}
            placeholder="Enter your fullname"
            placeholderTextColor="#A9A9A9"
            onChangeText={setFullName}
          />
        </View>
        <View style={style.textInputBox}>
          <MailIcon />
          <TextInput
            style={style.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#A9A9A9"
            onChangeText={setEmail}
          />
        </View>
        <View style={style.textInputBox}>
          <PasswordIcon />
          <TextInput
            style={style.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#A9A9A9"
            onChangeText={setPassword}
            secureTextEntry={eyeOn}
          />
          <Pressable onPress={() => setEyeOn(!eyeOn)}>
            {eyeOn ? <CloseEyeIcon /> : <OpenEyeIcon />}
          </Pressable>
        </View>
        <View style={style.textInputBox}>
          <PasswordIcon />
          <TextInput
            style={style.textInput}
            placeholder="Confirm your password"
            placeholderTextColor="#A9A9A9"
            onChangeText={setPassword}
            secureTextEntry
          />
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
        }}
        onPress={handleSignup}
      >
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 16 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <Text style={{ color: '#A9A9A9' }}>Already Have An Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              color: '#4A6CF7',
              fontWeight: '900',
              fontSize: 15,
              textDecorationLine: 'underline',
            }}
          >
            Log In
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

export default SignupScreen;
