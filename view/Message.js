import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useRef, useEffect, useState } from 'react';
import FriendSearchResult from '../components/friendSearchResult';
export default function Message({ navigation }) {
    const [showMessageBlock, setshowMessageBlock] = useState(true)
    const bottomSheetMessage = useRef();
    return (
        <SafeAreaView style={{ flex: 1,  }}>
              <StatusBar
                animated={true}
                backgroundColor="whitesmoke"
                barStyle={"dark-content"}
            />
            {showMessageBlock ? <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon onPress={() => navigation.goBack()} name='arrow-left' size={25} color={'gray'} />
                </TouchableOpacity>
                <View><Text style={{ fontSize: 20, color: "#4399fe" }}>Message</Text></View>
            </View> : <></>}
            <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>

                {showMessageBlock == false ?
                    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.goBack()}>
                        <Icon onPress={() => setshowMessageBlock(true)} name='arrow-left' size={25} color={'gray'} />
                    </TouchableOpacity> : <></>
                }
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={{
                            // borderWidth: 1,
                            fontSize: 16,
                            paddingLeft: 40,
                            color: "gray",
                            height: 40,
                            backgroundColor: "white",
                            borderRadius: 5,
                        }}
                        placeholder={"Rechercher un contact"}
                        placeholderTextColor={"gray"}
                        onPressIn={() => setshowMessageBlock(false)}
                    />
                    <Icon name="search" size={20} color={'gray'} style={{ position: "absolute", padding: 10, }} />
                </View>

                {/* {showMessageBlock == false ?
                    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
                        <Icon onPress={() => setshowMessageBlock(true)} name='filter' size={25} color={'gray'} />
                    </TouchableOpacity> : <></>
                } */}
            </View>

            {showMessageBlock ?
                <ScrollView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MessageResponse')} style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60 }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043270-avatar-joker-squad-suicide-woman_113256_zxicH0lkk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615556095' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, borderRadius: 30, minHeight: 60, backgroundColor: "lightgray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_female_avatar_vector_icon_3725439_zCLW5FvAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552333' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, minHeight: 60, backgroundColor: "gray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_vector_users_icon_4144740_TJoU9O0z_y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552347' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, minHeight: 60, backgroundColor: "lightgray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043252-child-girl-kid-person_113255_ny-rKIhsfS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552342' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('MessageResponse')} style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60 }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043260-avatar-male-man-portrait_113269_3XZgZ6wB3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615555036' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Bull Jimmy</Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60 }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043270-avatar-joker-squad-suicide-woman_113256_zxicH0lkk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615556095' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, borderRadius: 30, minHeight: 60, backgroundColor: "lightgray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_female_avatar_vector_icon_3725439_zCLW5FvAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552333' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, minHeight: 60, backgroundColor: "gray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/_Pngtree_vector_users_icon_4144740_TJoU9O0z_y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552347' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingBottom: 20, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{ aspectRatio: 5 / 5, width: 60, borderRadius: 30, minHeight: 60, backgroundColor: "lightgray" }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/4043252-child-girl-kid-person_113255_ny-rKIhsfS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552342' }} />
                            <View style={{ marginLeft: 10, }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#565656" }}>Marie Ange </Text>
                                </View>
                                <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>Je suis à Lille actuelement.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, color: "gray", marginTop: 2 }}>11.01</Text>
                    </TouchableOpacity>

          
                </ScrollView> :
                <FriendSearchResult />
            }
        </SafeAreaView>
    )
}