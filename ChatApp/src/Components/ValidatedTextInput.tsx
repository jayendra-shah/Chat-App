import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';
import {
  CloseEyeIcon,
  MailIcon,
  OpenEyeIcon,
  PasswordIcon,
} from '../uiAssets/icons';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isValidPassword = (password: string) => {
  return password.length >= 6;
};

export const EmailTextInput = ({
  value,
  onChangeText,
  placeholder = 'Enter your email',
}: Props) => {
  const [error, setError] = useState('');

  const handleChange = (text: string) => {
    onChangeText(text);

    if (!text) {
      setError('Email is required');
    } else if (!isValidEmail(text)) {
      setError('Enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <View>
      <View style={[styles.container, error && styles.errorBorder]}>
        <MailIcon />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor="#9A9A9D"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

type PasswordProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  compareWith?: string; // password to match
  isConfirm?: boolean;
};

export const PasswordTextInput = ({
  value,
  onChangeText,
  placeholder = 'Enter password',
  compareWith,
  isConfirm = false,
}: PasswordProps) => {
  const [eyeOn, setEyeOn] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (text: string) => {
    onChangeText(text);

    if (!text) {
      setError(
        isConfirm ? 'Confirm password is required' : 'Password is required',
      );
      return;
    }

    if (!isConfirm && text.length < 6) {
      setError('Minimum 6 characters');
      return;
    }

    if (isConfirm && text !== compareWith) {
      setError('Passwords do not match');
      return;
    }

    setError('');
  };

  return (
    <View>
      <View style={[styles.container, error && styles.errorBorder]}>
        <PasswordIcon />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9A9A9D"
          secureTextEntry={!eyeOn}
          value={value}
          onChangeText={handleChange}
        />
        <Pressable onPress={() => setEyeOn(!eyeOn)}>
          {!eyeOn ? <CloseEyeIcon /> : <OpenEyeIcon />}
        </Pressable>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  errorBorder: {
    borderColor: '#FF6B6B',
  },
});
