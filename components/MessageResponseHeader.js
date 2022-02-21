import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function MessageResponseHearder({ image, name, status, team, sport, navigation }) {
    return (
        <SafeAreaView>
            {/* <TouchableOpacity onPress={() => navigation.navigate('MessageResponse')} style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image style={{ aspectRatio: 5 / 5, width: 60 }} source={{ uri: image }} />
                    <View style={{ marginLeft: 10, }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>{name}</Text>
                        </View>
                        <Text style={{ fontSize: 15, color: "#55bd45", marginTop: 2, }}>{status}</Text>
                    </View>
                </View>
                <Text numberOfLines={1} style={{ fontSize: 15, color: "gray", marginTop: 2, width: 60 }}>{team}</Text>
                <Text numberOfLines={1} style={{ fontSize: 15, color: "gray", marginTop: 2, width: 60 }}>{sport}</Text>
            </TouchableOpacity> */}

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon onPress={() => navigation.goBack()} name='arrow-left' size={25} color={'gray'} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 10 }}>
                        <Image style={{ aspectRatio: 5 / 5, width: 50 }} source={{ uri: image }} />
                        <View style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>{name}</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "#55bd45", marginTop: 2, }}>{status}</Text>
                        </View>
                    </View>
                </View>


                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon onPress={() => navigation.goBack()} name='more-vertical' size={25} color={'gray'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}