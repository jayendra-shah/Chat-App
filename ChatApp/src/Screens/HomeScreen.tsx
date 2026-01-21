import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackIcon } from '../uiAssets/icons';

const users = [
  { id: '1', name: 'Amit', status: 'Online' },
  { id: '2', name: 'Kavya', status: 'Typing...' },
  { id: '3', name: 'Jay', status: 'Offline' },
  { id: '4', name: 'Riya', status: 'Online' },
];

const HomeScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          backgroundColor: '#1F1F1F',
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: insets.top + 16,
          gap: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#000',
              width: '94%',
              borderRadius: 10,
              paddingHorizontal: 14,
              paddingVertical: 8,
            }}
            placeholder="Search..."
            placeholderTextColor="#A9A9A9"
          />
        </Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('chat', { user: item })}
            style={{
              flexDirection: 'row',
              padding: 16,
              borderBottomWidth: 0.5,
              borderBottomColor: '#333',
              gap: 14,
            }}
          >
            <View
              style={{
                height: 54,
                width: 54,
                borderRadius: 25,
                overflow: 'hidden',
              }}
            >
              <Image
                source={require('../uiAssets/assets/profileLogo.png')}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 18 }}>{item.name}</Text>
              {item.status !== 'Offline' && (
                <Text
                  style={{
                    color: item.status === 'Online' ? '#A9A9A9' : '#4A6CF7',
                    fontSize: 12,
                  }}
                >
                  {item.status}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
