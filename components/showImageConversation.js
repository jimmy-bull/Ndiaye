import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView, ImageBackground
} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function ShowImageConversation({ navigation, route }) {
    const { imageLink, imageRatio } = route.params;
    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1, }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon onPress={() => navigation.goBack()} name='arrow-left' size={25} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Image style={{ width: Dimensions.get('window').width, aspectRatio: imageRatio, alignSelf: "center" }} resizeMode="cover" source={{ uri: imageLink }} >
                </Image>
            </View>

        </SafeAreaView>



    )
}