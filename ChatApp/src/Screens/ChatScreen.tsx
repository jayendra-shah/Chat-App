import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BackIcon, SendIcon } from '../uiAssets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import RenderMessages from '../Components/RenderMessages';

const ChatScreen = ({ navigation }:any) => {
  const [noMessage, setNoMessage] = useState(true);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: 8 + insets.bottom,
      }}
    >
      <View
        style={{
          backgroundColor: '#1F1F1F',
          paddingTop: insets.top + 16,
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{ padding: 3, borderRadius: 25, backgroundColor:'black' }}
          onPress={() => navigation.goBack()}
        >
          <BackIcon/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {noMessage ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Say hii</Text>
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <RenderMessages />
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#1F1F1F',
          width: '94%',
          borderRadius: 25,
          paddingHorizontal: 16,
          paddingVertical: 4,
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <TextInput
          style={{ flex: 1, color: 'white' }}
          placeholder="Message..."
          placeholderTextColor="#A9A9A9"
        />

        <TouchableOpacity
          onPress={() => setNoMessage(!noMessage)}
          style={{
            backgroundColor: '#4A6CF7',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 12,
          }}
        >
          <SendIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
