import {
    View,
    Dimensions,
    StyleSheet,
    Text,
    SafeAreaView
} from 'react-native';
import { useSelector } from 'react-redux';
import VideoPlayer from 'react-native-video-controls';
import BottomPost from '../view/BottomPost';
import React, { useRef } from 'react';

export default function FullscreenVideo({ route, navigation }) {
    const { videoLink } = route.params;
    const player = useRef();
    console.log(videoLink)
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <VideoPlayer
                source={{ uri: videoLink }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                navigator={navigation}
                ref={player}
                fullscreen={false}
                toggleResizeModeOnFullscreen={false}
                disableVolume
                disableFullscreen
                // resizeMode='contain'
            //  currentTime={videoCurrentTime}
            />
        </View>
    )
}