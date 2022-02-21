import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Button,
    Platform
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Feather';
export default function Pickimage({ navigation }) {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [1104, 736],
            quality: 1,
            allowsMultipleSelection: true
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
            navigation.navigate('ImageModificator', {
                image: result
            })
        }

    };
    // const openCamera = async () => {
    //     // Ask the user for the permission to access the camera
    //     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    //     if (permissionResult.granted === false) {
    //         alert("You've refused to allow this appp to access your camera!");
    //         return;
    //     }

    //     const result = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [1104, 736],
    //         quality: 1,
    //         // allowsMultipleSelection: true
    //     });

    //     // Explore the result
    //     console.log(result);

    //     if (!result.cancelled) {
    //         setPickedImagePath(result.uri);
    //         console.log(result.uri);
    //     }
    // }

    useEffect(() => {
        // if (image != null) {
        //     // setImage(result.uri);
        //     navigation.navigate('ImageModificator', {
        //         image: image
        //     })
        // }
    });
    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={pickImage} style={{ alignItems:"center",  backgroundColor: "orangered", height: 50, width: 50, justifyContent: "center", borderRadius: 25 }}>
                <Text><Icon name='image' size={25} color={'white'} /></Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 10, marginTop: 10, color: '#565656' }}>Galerie</Text>
        </View>
    )
}