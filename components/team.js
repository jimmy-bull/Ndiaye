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
import SearchBlock from './SearchBlock';
import Ion from 'react-native-vector-icons/Ionicons';
export default function Team({ navigation }) {
    return (
        <View>
            <SearchBlock navigation={navigation} editable={true} page="same" placeholder='Rechercher une equipe' />
            <ScrollView style={{ padding: 10, }}>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Paris Saint Germain   <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion></Text></Text>
                            </View>
                            <TouchableOpacity><Text style={{ color: "#4399fe", marginTop:5, fontSize:16 }}>Demander un match</Text></TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}