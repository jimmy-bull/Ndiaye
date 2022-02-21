import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CameraPerso({ route, navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const { cameraModeParams } = route.params;
    const [cameraMode, setCameraMoode] = useState(cameraModeParams);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="black"
                barStyle={"light-content"}
                 />
            <Camera style={styles.camera} type={type}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity

                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Ionicons name="camera-reverse-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        >
                            <Ionicons name="flash-off-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="close-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        >
                            <Ionicons name="images-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        {
                            cameraMode == "photo" ?
                                <TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: "white", height: 70, width: 70, borderRadius: 35, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "#4399fe", justifyContent: "center", alignItems: "center", height: 60, width: 60, borderRadius: 30, }}>
                                            <Ionicons name="camera-outline" size={25} color="white" />
                                        </View>
                                    </View>
                                </TouchableOpacity> :
                                <TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: "white", height: 70, width: 70, borderRadius: 35, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ backgroundColor: "orangered", justifyContent: "center", alignItems: "center", height: 60, width: 60, borderRadius: 30, }}>
                                            <Ionicons name="videocam-outline" size={25} color="white" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        }
                    </View>
                    <View style={styles.buttonContainer}>
                        {
                            cameraMode == "photo" ? <TouchableOpacity onPress={() => { setCameraMoode('video') }}>
                                <Ionicons name="videocam-outline" size={32} color="white" />
                            </TouchableOpacity> : <TouchableOpacity onPress={() => { setCameraMoode('photo') }}>
                                <Ionicons name="camera-outline" size={32} color="white" />
                            </TouchableOpacity>
                        }
                    </View>
                </View>

            </Camera>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        marginTop: 40
    },

    text: {
        fontSize: 18,
        color: 'white',
    },
});
