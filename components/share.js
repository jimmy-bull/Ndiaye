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
import Icon from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
// import SearchBlock from './SearchBlock'; 
export default function Share({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: "whitesmoke", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                        <Text><Icon name='facebook' size={30} color={'#4399fe'} /></Text>
                    </TouchableOpacity>
                    <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Facebook</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: "#4399fe", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                        <Text><Icon name='twitter' size={30} color={'white'} /></Text>
                    </TouchableOpacity>
                    <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Twitter</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <TextInput
                        style={{
                            borderWidth: 0,
                            fontSize: 16,
                            paddingLeft: 40,
                            color: "gray",
                            height: 40,
                            backgroundColor: "whitesmoke",
                            borderRadius: 5,
                        }}
                        placeholder={"Rechercher un ami"}
                        placeholderTextColor={"gray"}
                    />
                    <Icon name="search" size={20} color={'gray'} style={{ position: "absolute", padding: 10, }} />
                </View>
            </View>

            <ScrollView style={{ marginTop: 50, padding: 10 }}>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043252-child-girl-kid-person_113255_ny-rKIhsfS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552342' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_female_avatar_vector_icon_3725439_zCLW5FvAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552333' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043270-avatar-joker-squad-suicide-woman_113256_zxicH0lkk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615556095' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043252-child-girl-kid-person_113255_ny-rKIhsfS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552342' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_female_avatar_vector_icon_3725439_zCLW5FvAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552333' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'lightgray', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, backgroundColor: "lightgray", borderRadius: 30 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043270-avatar-joker-squad-suicide-woman_113256_zxicH0lkk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615556095' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}><Ion color={'#4399fe'} size={20} name="football-outline"></Ion> <Ion color={'#4399fe'} size={20} name="basketball-outline"></Ion> , Paris Saint Germain</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#4399fe" }}>Envoyer</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}