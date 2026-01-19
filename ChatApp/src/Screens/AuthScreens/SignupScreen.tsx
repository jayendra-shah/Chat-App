import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignupScreen = ({navigation}:any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: insets.bottom + 10,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            backgroundColor: '#121212',
            width: '90%',
            height: '60%',
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: '400',
              marginTop: '15%',
            }}
          >
            Create Your Account
          </Text>
          <View style={{ width: '92%', gap: 16 }}>
            <TextInput
              style={style.textInput}
              placeholder="Enter your fullname"
              placeholderTextColor="#A9A9A9"
            />
            <TextInput
              style={style.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#A9A9A9"
            />
            <TextInput
              style={style.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#A9A9A9"
            />
            <TextInput
              style={style.textInput}
              placeholder="confirm your password"
              placeholderTextColor="#A9A9A9"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#9112BC',
              paddingVertical: 12,
              width: '92%',
              alignItems: 'center',
              borderRadius: 25,
              alignSelf: 'center',
              marginBottom: '5%',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#A9A9A9' }}>Already Have An Account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('login')}>
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
