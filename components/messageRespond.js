import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import * as React from 'react';
import MessageResponseHearder from './MessageResponseHeader';
import MessageResponseBody from './MessageResponseBody';
import MessageResponseFooter from './MessageResponseFooter';
export default function MessageResponse({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MessageResponseHearder image={'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036'}
                name={'Bull Jimmy'} status={'En Ligne'} team={'P.S.G'} sport={'Football'} navigation={navigation}
            />
            <MessageResponseBody navigation={navigation} style={{ flex: 1 }} />
            <MessageResponseFooter />
        </SafeAreaView>
    )
}
