import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export const AuthLayout = ({ children }: any) => {
  return (
    <ImageBackground
      source={require('../uiAssets/assets/authBackground.webp')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <View style={styles.card}>{children}</View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Auth Layout
  background: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(28, 28, 30, 0.75)',
    width: '90%',
    borderRadius: 25,
    paddingVertical: '8%',
    gap: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
});
