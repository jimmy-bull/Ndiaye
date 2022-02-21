import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import * as React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'
import { useState, useCallback, useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import BottomSheet from "react-native-gesture-bottom-sheet";
export default function MessageResponseFooter() {
    const [showMic, setShowMic] = useState(true)
    const files = useRef();
    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ padding: 15, paddingRight: 10, paddingLeft: 10, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", }}>
            <TouchableOpacity onPress={() => files.current.show()} style={{ paddingLeft: 10, }}>
                <Text><Icon onPress={() => files.current.show()} name='paperclip' size={22} color={'gray'} /></Text>
            </TouchableOpacity>
            <View style={{ flex: 1, height: 40, }}>
                <TextInput
                    style={{ flex: 1, marginLeft: 10, backgroundColor: 'white', fontSize: 16, color: "gray", height: 40, paddingLeft: 10, borderRadius: 10 }}
                    placeholder="Message"
                    placeholderTextColor={"gray"}
                    onChangeText={(txt) => {
                        if (txt.trim() != '') {
                            setShowMic(false)
                        } else {
                            setShowMic(true)
                        }
                    }}
                />
                <TouchableOpacity style={{ right: 15, position: "absolute", top: 10, alignSelf: "flex-end" }}>
                    <Text style={{ alignSelf: "center" }}><Icon name='camera' size={20} color={'gray'} /></Text>
                </TouchableOpacity>
            </View>


            {showMic ?
                <TouchableOpacity style={{ paddingLeft: 10, }}>
                    <Text><Icon name='mic' size={22} color={'#55bd45'} /></Text>
                </TouchableOpacity> :
                <TouchableOpacity style={{ paddingLeft: 10, }}>
                    <Text><Icon name='send' size={22} color={'#55bd45'} /></Text>
                </TouchableOpacity>
            }
            <BottomSheet hasDraggableIcon ref={files} height={150}>
                <View style={{ padding: 20, alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: "#55bd45", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                            <Text><Icon name='file' size={30} color={'white'} /></Text>
                        </TouchableOpacity>
                        <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Documents</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: "#4399fe", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                            <Text><Icon name='camera' size={30} color={'white'} /></Text>
                        </TouchableOpacity>
                        <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Camera</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ paddingLeft: 10, backgroundColor: "orangered", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                            <Text><Icon name='image' size={30} color={'white'} /></Text>
                        </TouchableOpacity>
                        <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Galerie</Text>
                    </View>
                </View>

            </BottomSheet>

        </KeyboardAvoidingView>
    )
}


//https://www.youtube.com/watch?v=hDwUt2YzSLM = load more