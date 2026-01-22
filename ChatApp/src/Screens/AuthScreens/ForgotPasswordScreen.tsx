import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MailIcon } from '../../uiAssets/icons';
import { AuthLayout } from '../../uiAssets/layouts';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { EmailTextInput } from '../../Components/ValidatedTextInput';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const forgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email has been sent');
      navigation.navigate('login');
    } catch (error: any) {
      Alert.alert('Error', error.message);
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
        Reset Password
      </Text>
      <View style={{ width: '92%', gap: 16 }}>
        <EmailTextInput value={email} onChangeText={setEmail} />
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
        onPress={forgotPassword}
      >
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 16 }}>
          Reset
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <Text style={{ color: '#A9A9A9' }}>Back to Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 15,
              textDecorationLine: 'underline',
              color: '#4A6CF7',
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

export default ForgotPasswordScreen;
