import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import AccordionListItem from '../components/AccordionListItem';
import * as ImagePicker from 'expo-image-picker';

const imageData = [
    {
        id: 0,
        images: [
            {
                id: 0,
                image: 'https://media.istockphoto.com/photos/soccer-player-kicks-a-ball-picture-id1163749879?k=20&m=1163749879&s=170667a&w=0&h=9FFbqQv6ZZ_WXS-FzzPtkBqr0h2Y2d6GLpdYBVsfitc=',
                idImageSub: 0,
                imageDimension: 560 / 308
            },

            {
                id: 1,
                image:
                    'https://images.fineartamerica.com/images-medium-large-5/4-soccer-player-kicking-ball-in-stadium-dmytro-aksonov.jpg',
                idImageSub: 1,
                imageDimension: 900 / 540

            },
            {
                id: 2,
                image:
                    'https://mazwai.com/videvo_files/video/free/2015-05/small_watermarked/davide_quatela--breathing_barcelona_preview.webm',
                idImageSub: 2,
                imageDimension: 1104 / 736

            },

        ],
        posterName: "Jimmy Bull",
        city: "Lille",
        country: "France",
        postId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        description: "Your daily reminder to leave that headache alone tuifdyufidyfudf dfydfuidfiduf dfdufidff dfuydfdf dfudfdf ",
        postType: 'regular',
    },
    {
        id: 1,
        images: [
            {
                id: 0,
                image:
                    'https://mazwai.com/videvo_files/video/free/2019-09/small_watermarked/190828_07_MarinaBayatNightDrone_UHD_03_preview.webm',
                idImageSub: 2,
                imageDimension: 1104 / 736

            },
            {
                id: 1,
                image:
                    'https://i.insider.com/5fbe52b350e71a00115574c4',
                idImageSub: 0,
                imageDimension: 2000 / 1333
            },

            {
                id: 2,

                image: 'https://www.sportbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.sportbible.com%2Fs3%2Fcontent%2F082ccc875faaad535ceae275c4515a26.png',
                idImageSub: 1,

                imageDimension: 1200 / 675
            },

        ],
        posterName: "Jean-marc",
        city: "Montpellier",
        country: "France",
        postId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        description: " On vend la neige, nous on va pas au ski",
        postType: 'regular',
        idImage: 1
    },

    {
        id: 2,
        images: [
            {
                id: 0,
                image:
                    'https://media.newyorker.com/photos/59095186019dfc3494e9dab5/master/w_2560%2Cc_limit/457771195-290.jpg',
                idImageSub: 0,
                imageDimension: 290 / 435
            },

            {
                id: 1,
                image: 'https://www.kxan.com/wp-content/uploads/sites/40/2021/09/aaron-lowe.jpeg?strip=1',
                idImageSub: 1,

                imageDimension: 2965 / 1667
            },
            {
                id: 2,
                image:
                    'https://mazwai.com/videvo_files/video/free/2019-09/small_watermarked/190828_07_MarinaBayatNightDrone_UHD_03_preview.webm',
                idImageSub: 2,
                imageDimension: 1104 / 736

            },
        ],
        posterName: "Paul enry",
        city: "Caen",
        country: "France",
        postId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        description: " On vend la neige, nous on va pas au ski",
        postType: 'regular',
        idImage: 1
    },
    {
        id: 3,
        equipe1: 'PSG',
        equipe2: "Marseille",
        logo1: "https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364",
        logo2: "https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d2_j1j6qJsBq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552332",
        date: "05/01/2022",
        sport: 'Football',
        postId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6358',
        score1: 3,
        score2: 1,
        postType: 'automatique',
        description: 'Thank you all for the birthday wishes 💙 more life and more music'
    },
    {
        id: 4,
        images: [
            {
                id: 0,
                image:
                    'https://www.scisports.com/wp-content/uploads/2019/07/ContributionRatings-Visual-Messi-1920-1280x720.jpg',
                idImageSub: 0,
                imageDimension: 1280 / 720
            },

            {
                id: 1,
                image: 'https://athlonsports.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyMDIzMTM2NjM5MzI5NDEx/10-oldest-players-in-nfl-history.jpg',
                idImageSub: 1,

                imageDimension: 1200 / 900
            },
            {
                id: 2,
                image:
                    'https://mazwai.com/videvo_files/video/free/2019-09/small_watermarked/190828_07_MarinaBayatNightDrone_UHD_03_preview.webm',
                idImageSub: 2,
                imageDimension: 1104 / 736

            },
        ],
        posterName: "Kouadio",
        city: "Paris",
        country: "France",
        postId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        description: " On vend la neige, nous on va pas au ski",
        postType: 'regular',
        idImage: 1
    },

]
export default function Profile({ navigation }) {
    const [profilPhoto, setprofilPhoto] = useState('https://medias.lequipe.fr/img-photo-jpg/lionel-messi-ne-regrette-pas-son-choix-de-rejoindre-le-paris-sg-franck-seguin-l-equipe/1500000001551988/0:0,658:823-1200-1500-75/95eac.jpg')
    const profilPhotoElement = (imageLink) => {
        return (
            <TouchableOpacity onPress={pickImage}
                style={{
                    borderRadius: 5,
                }}>
                <Image style={{ width: 150, height: 150, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5 }} defaultSource={require('../image/wainting.png')} source={{ uri: imageLink, cache: 'default' }} />
                <View style={{ position: 'absolute', zIndex: 3, alignSelf: "flex-end", borderRadius: 5, flexDirection: "row", backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <Text style={{ color: 'white', margin: 5 }}>Modifier</Text>
                    <Icon style={{ margin: 5 }} name='edit' size={15} color={'white'} />
                </View>
            </TouchableOpacity>
        )
    }
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
            // navigation.navigate('ImageModificator', {
            //     image: result
            // })
        }

    };
    const profilPhotoElementFinal = useMemo(() => profilPhotoElement(profilPhoto), [profilPhoto]);
    return (
        <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white', paddingTop: 5 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="white"
                    barStyle={"dark-content"}
                />
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ marginTop: 10, color: 'black' }}>Marseille <Text style={{ fontWeight: 'bold' }}>14</Text></Text>
                        <View style={{ flex: 1, borderStyle: 'solid', borderWidth: 0.5, height: 0 }}></View>
                    </View>
                    <View>
                        <Text style={{ marginTop: 10, fontWeight: '700', color: 'black' }}>Bull Jimmy</Text>
                        <View style={{ flex: 1, borderStyle: 'solid', borderWidth: 0.5, height: 0 }}></View>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-between' }}>
                    {profilPhotoElementFinal}
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('MessageResponse', {
                            id: 2
                        })} style={{
                            marginTop: 10, width: 120, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'black', margin: 5 }}>Message</Text>
                            <Ionicons style={{ margin: 5 }} onPress={() => navigation.navigate('MessageResponse', {
                                id: 2
                            })} name='mail-outline' size={15} color={'black'} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigation.navigate('Message')} style={{
                            marginTop: 10, width: 120, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,

                        }}>
                            <Text style={{ color: 'black', margin: 5 }}>Mes équipes</Text>
                            <Ionicons style={{ margin: 5 }} onPress={() => navigation.navigate('ImageModificator', {
                                image: data.uri
                            })} name='people-outline' size={15} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", }}>
                    <View style={{
                        justifyContent: 'center', alignSelf: 'center', marginTop: 20, paddingTop: 10,
                        paddingBottom: 10, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>Trophées remportés</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1</Text>
                                <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#bdbfba'} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2</Text>
                                <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#ffd700'} />
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>0</Text>
                                <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#cac5bf'} />
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2</Text>
                                <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#b07c6d'} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Ionicons name='alert-circle' size={25} color={'orangered'} />
                    </View>
                </View>
                <AccordionListItem title={
                    <> <Ionicons style={{ margin: 5 }} name='trophy-outline' size={20} color={'#b07c6d'} />  <Text style={{ fontSize: 16, }}>Palmarès</Text>  </>}>
                    <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Printemps 2021</Text>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>3ème place</Text>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', }}>
                                <Ionicons style={{ margin: 5 }} name='medal-outline' size={25} color={'#b07c6d'} />
                            </Text>
                        </View>
                        <View style={{ borderTopWidth: 1, width: "100%", borderColor: '#EFEFEF', padding: 10 }}>
                            <AccordionListItem title={'Voir classement de la saison'}>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            1er <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>P.S.G</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            15V / 7D/ 0N
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            2ème <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Barcelone</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            12V / 5D/ 2N
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            3ème <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Barcelone</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            10V / 5D/ 2N
                                        </Text>
                                    </View>
                                </View>
                            </AccordionListItem>

                            <AccordionListItem title={'Voir Liste des match'}>
                                <View>
                                    <View style={{
                                        padding: 20,
                                        borderBottomColor: 'lightgray',
                                        borderBottomWidth: 1,
                                        backgroundColor: "white",
                                    }}>
                                        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "500", color: "black" }}>{'FootBall'}</Text>
                                        <Text style={{ alignSelf: "center", color: "gray", marginTop: 10 }}>{'12/20/2021'}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, alignItems: "center" }}>
                                            <View style={{ alignItems: "center" }}>
                                                <Image style={{ height: 70, width: 70, marginBottom: 10, resizeMode: 'contain' }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364', cache: 'default' }} />
                                                <Text style={{ fontWeight: "500", color: "black" }}>{'PSG'}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", }}>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>{2}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>:</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>{1}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: "center" }}>
                                                <Image style={{ height: 70, width: 70, marginBottom: 10, resizeMode: 'contain' }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d2_j1j6qJsBq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552332', cache: 'default' }} />
                                                <Text style={{ fontWeight: "500", color: "black" }}>{'Marseille'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </AccordionListItem>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Hiver 2021</Text>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>6ème place</Text>
                            <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', }}>
                                <Ionicons style={{ margin: 5 }} name='medal-outline' size={25} color={'#cac5bf'} />
                            </Text>
                        </View>
                        <View style={{ borderTopWidth: 1, width: "100%", borderColor: '#EFEFEF', padding: 10 }}>
                            <AccordionListItem title={'Voir classement de la saison'}>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            1er <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>P.S.G</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            15V / 7D/ 0N
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            2ème <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Barcelone</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            12V / 5D/ 2N
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, width: "100%", borderColor: '#EFEFEF', borderTopWidth: 0 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            3ème <Ionicons style={{ margin: 5 }} name='medal-outline' size={15} color={'#b07c6d'} />
                                        </Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>Barcelone</Text>
                                        <Text style={{ borderRightWidth: 1, padding: 5, borderColor: '#EFEFEF', flex: 1 }}>
                                            10V / 5D/ 2N
                                        </Text>
                                    </View>
                                </View>
                            </AccordionListItem>

                            <AccordionListItem title={'Voir Liste des match'}>
                                <View>
                                    <View style={{
                                        padding: 20,
                                        borderBottomColor: 'lightgray',
                                        borderBottomWidth: 1,
                                        backgroundColor: "white",
                                    }}>
                                        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "500", color: "black" }}>{'FootBall'}</Text>
                                        <Text style={{ alignSelf: "center", color: "gray", marginTop: 10 }}>{'12/20/2021'}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, alignItems: "center" }}>
                                            <View style={{ alignItems: "center" }}>
                                                <Image style={{ height: 70, width: 70, marginBottom: 10, resizeMode: 'contain' }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d8_VfT-LVj79vN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552364', cache: 'default' }} />
                                                <Text style={{ fontWeight: "500", color: "black" }}>{'PSG'}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", }}>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>{2}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>:</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 25, fontWeight: "bold", padding: 5, color: "black", paddingTop: 0 }}>{1}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: "center" }}>
                                                <Image style={{ height: 70, width: 70, marginBottom: 10, resizeMode: 'contain' }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://ik.imagekit.io/jimmyBull/580b57fcd9996e24bc43c4d2_j1j6qJsBq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643615552332', cache: 'default' }} />
                                                <Text style={{ fontWeight: "500", color: "black" }}>{'Marseille'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </AccordionListItem>
                        </View>
                    </View>
                </AccordionListItem>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 10, width: 80, alignItems: "center", margin: 5 }}>
                            <Text style={{ alignSelf: 'center' }}>FootBall</Text>
                        </View>
                        <View style={{ backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 10, width: 80, alignItems: "center", margin: 5 }}>
                            <Text style={{ alignSelf: 'center' }}>Tennis</Text>
                        </View>
                        <View style={{ backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 10, width: 80, alignItems: "center", margin: 5 }}>
                            <Text style={{ alignSelf: 'center' }}>Basketball</Text>
                        </View>
                        <View style={{ backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 10, width: 80, alignItems: "center", margin: 5 }}>
                            <Text style={{ alignSelf: 'center' }}>BaseBall</Text>
                        </View>
                        <View style={{ backgroundColor: 'whitesmoke', borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 10, width: 80, alignItems: "center", margin: 5 }}>
                            <Text style={{ alignSelf: 'center' }}>Handball</Text>
                        </View>
                    </View>
                </ScrollView>
                <Text style={{ alignSelf: 'center', marginTop: 20, color: 'black', fontWeight: '600' }}>Printemps 2021</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Paris Saint Germain:</Text>
                    <Text style={{ marginLeft: 10, color: 'black' }}>15V / 3D / 0N</Text>
                </View>
                <Text style={{ alignSelf: 'center', marginTop: 10, color: 'black', fontWeight: '600' }}>4ème place</Text>
                <View style={{ flexDirection: 'row', flex: 1, flexWrap: "wrap", marginTop: 20, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SinglePost',
                        {
                            datas: imageData
                        }
                    )} style={{
                        borderRadius: 5,
                        marginTop: 0,
                        marginBottom: 10,
                    }}>
                        <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5 }}
                            defaultSource={require('../image/wainting.png')} source={{ uri: 'https://media.istockphoto.com/photos/soccer-player-kicks-a-ball-picture-id1163749879?k=20&m=1163749879&s=170667a&w=0&h=9FFbqQv6ZZ_WXS-FzzPtkBqr0h2Y2d6GLpdYBVsfitc=', cache: 'default' }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SinglePost',
                        {
                            datas: imageData
                        }
                    )} style={{
                        borderRadius: 5,
                        marginTop: 0,
                        marginBottom: 10,
                    }}>
                        <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5 }}
                            defaultSource={require('../image/wainting.png')} source={{ uri: 'https://images.fineartamerica.com/images-medium-large-5/4-soccer-player-kicking-ball-in-stadium-dmytro-aksonov.jpg', cache: 'default' }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SinglePost',
                        {
                            datas: imageData
                        }
                    )} style={{
                        borderRadius: 5,
                        marginTop: 0,
                        marginBottom: 10,
                    }}>
                        <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5 }}
                            defaultSource={require('../image/wainting.png')} source={{ uri: 'https://www.sportbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.sportbible.com%2Fs3%2Fcontent%2F082ccc875faaad535ceae275c4515a26.png', cache: 'default' }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SinglePost',
                        {
                            datas: imageData
                        }
                    )} style={{
                        borderRadius: 5,
                        marginTop: 0,
                        marginBottom: 10,
                    }}>
                        <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5 }}
                            defaultSource={require('../image/wainting.png')} source={{ uri: 'https://media.newyorker.com/photos/59095186019dfc3494e9dab5/master/w_2560%2Cc_limit/457771195-290.jpg', cache: 'default' }} />

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

