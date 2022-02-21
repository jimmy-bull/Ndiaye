import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    TextInput,
    StatusBar
} from 'react-native';
import * as React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'
import { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather';
// import VideoPlayer from 'react-native-video-controls';
export default function MessageResponseBody({ navigation }) {
    const [videoAspecRation, setvideoAspecRation] = useState(1080 / 1350)
    return (
        <View style={{ flex: 1, }}>
              <StatusBar
                animated={true}
                backgroundColor="whitesmoke"
                barStyle={"dark-content"}
            />
            <ScrollView style={{ flex: 1, }}>
                <Text style={{ alignSelf: "center", marginTop: 20, color: '#565656', fontSize: 16 }}>Today</Text>
                {/* ME */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View >
                        <Text style={{ fontSize: 16, }}>
                            Bonjour Monsieur comment on vas ? j'etais au village hier soir et j'ai  vus ta meuf au bar. Elle étais trés bien habillé.
                        </Text>
                        <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, }}>Bonjour Monsieur comment on vas ? </Text>
                        <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22
                        </Text>
                    </View>
                </View>
                {/* you */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-start', backgroundColor: '#4399fe', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }}>Bonjour Monsieur comment on vas ? </Text>
                        <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22  <Icon name='check' size={16} color={'white'} />
                        </Text>
                    </View>

                </View>
                {/* ME */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 16, }}>
                        Bonjour Monsieur comment on vas ? j'etais au village hier soir et j'ai  vus ta meuf au bar. Elle étais trés bien habillé.
                    </Text>
                    <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                        16:22
                    </Text>
                </View>
                {/* you */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-start', backgroundColor: '#4399fe', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }}>Bonjour Monsieur comment on vas ? </Text>
                        <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22  <Icon name='check' size={16} color={'white'} />
                        </Text>
                    </View>
                </View>
                {/* you */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-start', backgroundColor: '#4399fe', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }}>Bonjour Monsieur comment on vas ? </Text>
                        <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22  <Icon name='check' size={16} color={'white'} />
                        </Text>
                    </View>
                </View>
                {/* ME */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 16, }}>
                        Bonjour Monsieur comment on vas ? j'etais au village hier soir et j'ai  vus ta meuf au bar. Elle étais trés bien habillé.
                    </Text>
                    <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                        16:22
                    </Text>
                </View>

                {/* ME */}

                <TouchableOpacity onPress={() => navigation.navigate('ShowImageConversation', {
                    imageLink: 'https://cdn.foot-sur7.fr/768x512/articles/2022/01/Messi_Icon_DIB-121221-11-03.jpg',
                    imageRatio: 758 / 512
                })} style={{ marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <Image style={{ borderRadius: 5, aspectRatio: 5 / 5, width: 150, alignSelf: "flex-end", marginBottom: 10 }} source={{ uri: "https://cdn.foot-sur7.fr/768x512/articles/2022/01/Messi_Icon_DIB-121221-11-03.jpg" }} />
                    <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                        16:22
                    </Text>
                </TouchableOpacity>

                {/* you */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-start', backgroundColor: '#4399fe', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }}>Bonjour Monsieur comment on vas ? </Text>
                        <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 12 }}>
                            16:22  <Icon name='check' size={16} color={'white'} />
                        </Text>
                    </View>
                </View>
                {/* ME */}
                <View style={{ marginTop: 20, marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 16, }}>
                        Bonjour Monsieur comment on vas ? j'etais au village hier soir et j'ai  vus ta meuf au bar. Elle étais trés bien habillé.
                    </Text>
                    <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12 }}>
                        16:22
                    </Text>
                </View>

                {/* ME */}
                <TouchableOpacity onPress={() => navigation.navigate('fullscreenVideo', {
                    videoLink: "https://ik.imagekit.io/jimmyBull/pexels-polina-kovaleva-6265961_ZWwSZzwvs.mp4",
                })} style={{ marginBottom: 0, alignSelf: 'flex-end', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 20, paddingTop: 15, paddingBottom: 15 }}>
                    {/* <VideoPlayer
                        source={{ uri: "https://ik.imagekit.io/jimmyBull/pexels-polina-kovaleva-6265961_ZWwSZzwvs.mp4" }}
                        style={{ height:200, width: 200, borderRadius: 5 }}
                        toggleResizeModeOnFullscreen={false}
                        rate={1.0}
                        paused={true}
                        disableVolume
                        disableBack
                        disableTimer
                        disableSeekbar
                        disablePlayPause
                        disableFullscreen
                        resizeMode='cover'
                        poster='https://ik.imagekit.io/jimmyBull/mingwei-lim-Qi1eNaEzlAE-unsplash_lOoV4MOYT66.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643615560056'
                        posterResizeMode='cover' // HYL4UaqXe@z3Lr4
                    /> */}

                    <View style={{ position: "absolute", alignSelf: "center", justifyContent: 'center', width: '100%', height: '100%' }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center', borderRadius: 50, alignSelf: "center",
                        }} onPress={() => navigation.navigate('fullscreenVideo', {
                            videoLink: "https://ik.imagekit.io/jimmyBull/pexels-polina-kovaleva-6265961_ZWwSZzwvs.mp4",
                        })}>
                            <Icon name="play" size={40} color="white" style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "gray", alignSelf: "flex-end", fontSize: 12, marginTop: 10 }}>
                        16:22
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    )
}


//https://www.youtube.com/watch?v=hDwUt2YzSLM = load more