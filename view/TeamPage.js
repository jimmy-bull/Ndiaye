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
    StatusBar,
    Modal,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
export default function TeamPage({ navigation }) {
    const [askMatch, setaskMatch] = useState(false);
    const [statusBarColor, setStatusBarColor] = useState('white')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('football');
    const [items, setItems] = useState([
        { label: 'Football', value: 'Football' },
        { label: 'Tennis', value: 'Tennis' },
        { label: 'Basketball', value: 'Basketball' },
        { label: 'Baseball', value: 'Baseball' },
        { label: 'Handball', value: 'Handball' },
    ]);
    const [profilPhoto, setprofilPhoto] = useState('https://medias.lequipe.fr/img-photo-jpg/lionel-messi-ne-regrette-pas-son-choix-de-rejoindre-le-paris-sg-franck-seguin-l-equipe/1500000001551988/0:0,658:823-1200-1500-75/95eac.jpg');

    const [logoBase, setLogoBase] = useState('https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364');
    const [couvertureBase, setCouvertureBase] = useState('https://images.psg.media/media/218892/1200x800_psgfr-1.png');
    const [teamModalState, setTeamModalState] = useState(false);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [150, 150],
            quality: 1,
            allowsMultipleSelection: true
        });
        console.log(result);
        if (!result.cancelled) {
            setprofilPhoto(result.uri);
        }
    };
    const DeleteAlert = () =>
        Alert.alert(
            "Attention",
            "Voulez-vous vraiment supprimer cette équipe ?",
            [
                {
                    text: "Non",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Oui", onPress: () => console.log("OK Pressed") }
            ]
        );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                animated={true}
                backgroundColor={statusBarColor}
                barStyle={"dark-content"}
            />
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <View style={{
                        width: 160, height: 160, borderWidth: 1,
                        justifyContent: 'center', borderColor: "lightgray", borderRadius: 5,
                        marginTop: 30
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CurrentTeam')}>
                            <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CurrentTeam')}>
                            <Text style={{ alignSelf: 'center', marginTop: 10, color: 'gray' }}>Paris SAint Germain</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={DeleteAlert} style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} name='trash-outline' size={20} color={'#b07c6d'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setTeamModalState(true), setStatusBarColor('rgba(0,0,0,0.3)') }} style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} name='create' size={20} color={'#b07c6d'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { setaskMatch(true), setStatusBarColor('rgba(0,0,0,0.3)') }} style={{
                        width: 160, height: 160, borderWidth: 1,
                        justifyContent: 'center', borderColor: "lightgray", borderRadius: 5,
                        marginTop: 30,
                    }}>
                        <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} name='add-circle-outline' size={30} color={'gray'} />
                        <Text style={{ alignSelf: 'center', marginTop: 10, color: 'gray' }}>Ajouter une équipe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal animationType="slide"
                transparent={true}
                visible={askMatch}
            >
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    padding: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <View style={{ backgroundColor: 'white', padding: 20, flex: 1, borderRadius: 5, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <Text style={{ fontWeight: 'bold' }}>Ajouter une équipe</Text>
                            <TouchableOpacity onPress={() => { setaskMatch(false), setStatusBarColor('white') }}>
                                <Ionicons name='close' size={25} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder='Sélectionner un Sport'
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <TextInput
                                    style={{
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        flex: 1,
                                        color: "black",
                                        borderBottomColor: 'black',
                                    }}
                                    placeholder={'Nom de l\'équipe'}
                                    placeholderTextColor='black'
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <TextInput
                                    style={{
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        flex: 1,
                                        color: "gray",
                                        borderBottomColor: 'black',
                                    }}
                                    placeholder={'Ville de l\'équipe'}
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
                                <Text style={{ marginBottom: 10 }}> Logo de l'équipe</Text>
                                <TouchableOpacity onPress={pickImage}
                                    style={{
                                        borderRadius: 5,
                                    }}>
                                    <Image style={{
                                        width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1,
                                        resizeMode: 'cover', borderRadius: 50
                                    }}
                                        defaultSource={require('../image/wainting.png')} source={{ uri: profilPhoto, cache: 'default' }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
                                <Text style={{ marginBottom: 10 }}>Image de couverture</Text>
                                <TouchableOpacity onPress={pickImage}
                                    style={{
                                        borderRadius: 5,
                                    }}>
                                    <Image style={{
                                        width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1,
                                        resizeMode: 'cover', borderRadius: 50
                                    }}
                                        defaultSource={require('../image/wainting.png')} source={{ uri: profilPhoto, cache: 'default' }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row', justifyContent: "center", marginTop: 30,
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: "#4399fe",
                                padding: 5,
                                borderRadius: 3,
                                paddingRight: 15,
                                paddingLeft: 15,

                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "white",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>Valider</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            <Modal animationType="slide"
                transparent={true}
                visible={teamModalState}
            >
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    padding: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <View style={{ backgroundColor: 'white', padding: 20, flex: 1, borderRadius: 5, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <Text style={{ fontWeight: 'bold' }}>Modifier les informations de l'équipe</Text>
                            <TouchableOpacity onPress={() => { setTeamModalState(false), setStatusBarColor('white') }}>
                                <Ionicons name='close' size={25} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder='Sélectionner un Sport'
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <TextInput
                                    style={{
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        flex: 1,
                                        color: "black",
                                        borderBottomColor: 'black',
                                    }}
                                    placeholder={'Paris saint Germain'}
                                    placeholderTextColor='black'
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <TextInput
                                    style={{
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        flex: 1,
                                        color: "gray",
                                        borderBottomColor: 'black',
                                    }}
                                    placeholder={'Paris'}
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
                                <Text style={{ marginBottom: 10 }}> Logo de l'équipe</Text>
                                <TouchableOpacity onPress={pickImage}
                                    style={{
                                        borderRadius: 5,
                                    }}>
                                    <Image style={{
                                        width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1,
                                        resizeMode: 'cover', borderRadius: 50
                                    }}
                                        defaultSource={require('../image/wainting.png')} source={{ uri: logoBase, cache: 'default' }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={pickImage} style={{ alignItems: 'center' }}>
                                <Text style={{ marginBottom: 10 }}>Image de couverture</Text>
                                <TouchableOpacity onPress={pickImage}
                                    style={{
                                        borderRadius: 5,
                                    }}>
                                    <Image style={{
                                        width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1,
                                        resizeMode: 'cover', borderRadius: 50
                                    }}
                                        defaultSource={require('../image/wainting.png')} source={{ uri: couvertureBase, cache: 'default' }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row', justifyContent: "center", marginTop: 30,
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: "#4399fe",
                                padding: 5,
                                borderRadius: 3,
                                paddingRight: 15,
                                paddingLeft: 15,

                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "white",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>Modifier</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
