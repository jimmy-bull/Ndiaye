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
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import * as React from 'react';

export default function Comment({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor:'white' }}>
            {/* MAIN COMMENT ZONE */}
            <ScrollView style={{ marginTop: 20 }}>
                <View style={{ marginBottom: 30 }}>
                    <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 40, borderRadius: 20, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                            <Text style={{ fontSize: 15, fontWeight: "500", color: "#565656", marginLeft: 10, }} >Bull Jimmy</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, color: "gray", }}>16h</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 50, marginTop: 10, marginRight: 5, borderLeftWidth: 1, paddingBottom: 10, borderColor: "lightgray", paddingLeft: 10 }}>
                        <Text style={{ color: 'gray' }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</Text>
                        <View style={{ marginTop: 20, flexDirection: "row", }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text> <IconAnt name="hearto" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                <Text style={{ marginLeft: 10, color: "gray" }}>123 j'aime</Text>
                            </View>
                            <Text style={{ marginLeft: 20 }}> <Icon name="refresh-ccw" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                        </View>
                        {/* SUBcomment */}
                        <View style={{ marginBottom: 30, marginTop: 20 }}>
                            <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                                    <Text style={{ fontSize: 15, fontWeight: "500", color: "#565656", marginLeft: 10, }}>Bull Jimmy</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15, color: "gray", }}>16h</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 50, marginTop: 10, marginRight: 5, borderLeftWidth: 1, paddingBottom: 10, borderColor: "lightgray", paddingLeft: 10 }}>
                                <Text style={{ color: 'gray' }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</Text>
                                <View style={{ marginTop: 20, flexDirection: "row", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text> <IconAnt name="hearto" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                        <Text style={{ marginLeft: 10, color: "gray" }}>123 j'aime</Text>
                                    </View>
                                    <Text style={{ marginLeft: 20 }}> <Icon name="refresh-ccw" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 30, marginTop: 20 }}>
                            <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                                    <Text style={{ fontSize: 15, fontWeight: "500", color: "#565656", marginLeft: 10, }}>Bull Jimmy</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15, color: "gray", }}>16h</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 50, marginTop: 10, marginRight: 5, borderLeftWidth: 1, paddingBottom: 10, borderColor: "lightgray", paddingLeft: 10 }}>
                                <Text style={{ color: 'gray' }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</Text>
                                <View style={{ marginTop: 20, flexDirection: "row", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text> <IconAnt name="hearto" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                        <Text style={{ marginLeft: 10, color: "gray" }}>123 j'aime</Text>
                                    </View>
                                    <Text style={{ marginLeft: 20 }}> <Icon name="refresh-ccw" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                    <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 40, borderRadius: 20, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                            <Text style={{ fontSize: 15, fontWeight: "500", color: "#565656", marginLeft: 10, }} >Bull Jimmy</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, color: "gray", }}>16h</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 50, marginTop: 10, marginRight: 5, borderLeftWidth: 1, paddingBottom: 10, borderColor: "lightgray", paddingLeft: 10 }}>
                        <Text style={{ color: 'gray' }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</Text>
                        <View style={{ marginTop: 20, flexDirection: "row", }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text> <IconAnt name="hearto" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                <Text style={{ marginLeft: 10, color: "gray" }}>123 j'aime</Text>
                            </View>
                            <Text style={{ marginLeft: 20 }}> <Icon name="refresh-ccw" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                        </View>
                        {/* SUBcomment */}
                        <View style={{ marginBottom: 30, marginTop: 20 }}>
                            <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                                    <Text style={{ fontSize: 15, fontWeight: "500", color: "#565656", marginLeft: 10, }}>Bull Jimmy</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15, color: "gray", }}>16h</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 50, marginTop: 10, marginRight: 5, borderLeftWidth: 1, paddingBottom: 10, borderColor: "lightgray", paddingLeft: 10 }}>
                                <Text style={{ color: 'gray' }}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification.</Text>
                                <View style={{ marginTop: 20, flexDirection: "row", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text> <IconAnt name="hearto" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                        <Text style={{ marginLeft: 10, color: "gray" }}>123 j'aime</Text>
                                    </View>
                                    <Text style={{ marginLeft: 20 }}> <Icon name="refresh-ccw" size={18} color='gray' style={{ position: "absolute", padding: 10, }} /></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


            </ScrollView>
            <View style={{ backgroundColor: 'white', padding: 15, paddingRight: 10, paddingLeft: 10, alignItems: 'center', flexDirection: "row", justifyContent: "space-evenly", margin: 10, borderRadius: 30, marginBottom: 20 }}>
                <Image style={{ aspectRatio: 5 / 5, width: 40, borderRadius: 20, resizeMode: "cover", backgroundColor: "lightgray" }} source={{ uri: "https://www.rtl.be/info/GED/09580000/9587900/9587935.jpg", }} />
                <TextInput
                    style={styles.inputy}
                    placeholder="Ajouter un commentaire..."
                    placeholderTextColor={"gray"}
                />
                <Text style={{ color: "#4399fe" }}>Ajouter</Text>
            </View>
        </View>

    )
}

styles = StyleSheet.create({
    inputy: {
        borderWidth: 0,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        color: "gray",
        height: 40,
        borderRadius: 5,
    },
})
