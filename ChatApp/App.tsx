import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigation';
import { useEffect } from 'react';
import { firebase } from '@react-native-firebase/app';

function App() {
  useEffect(() => {
    console.log('Firebase apps:', firebase.apps.length);
  }, []);
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
