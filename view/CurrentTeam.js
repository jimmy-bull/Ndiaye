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
    ImageBackground,
    StatusBar,
    Modal
} from 'react-native';
import React, { useState, useRef, useMemo } from 'react';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import AccordionListItem from '../components/AccordionListItem';
import * as ImagePicker from 'expo-image-picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import { set } from 'react-native-reanimated';


export default function CurrentTeam({ data, navigation }) {
    const [pageImage, setpageImage] = useState('https://images.psg.media/media/218892/1200x800_psgfr-1.png');
    const [askMatch, setaskMatch] = useState(false);
    const [statusBarColor, setStatusBarColor] = useState('white')

    const [date, setDate] = useState('Jour / Mois / Année');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [hours, SetHours] = useState('Heures / Minutes / Secondes')
    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            setDate(selectedDate.getDate() + ' / ' + selectedDate.getMonth() + ' / ' + selectedDate.getFullYear());
        } else if (mode == 'time') {
            SetHours(selectedDate.getHours() + ' / ' + selectedDate.getMinutes() + ' / ' + selectedDate.getSeconds());
        }

        // console.log(
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    const teamebody = (data) => {
        return (
            <View>
                <View style={{ marginTop: -30, alignItems: 'center', justifyContent: 'center', justifyContent: 'space-between', }}>
                    <View
                        style={{
                            borderRadius: 2,
                        }}>
                        <Image style={{ width: 140, height: 140, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 2 }} defaultSource={require('../image/wainting.png')} source={{ uri: 'https://img.search.brave.com/_r2t_w-DWC8bmp8SbpccPFDJUwP8MAzg__yMxPa9R0g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/emJydXNoY2VudHJh/bC5jb20vdXBsb2Fk/cy9kZWZhdWx0L29w/dGltaXplZC80WC81/L2QvMC81ZDAzNmUx/YjdjNDAxZDQ4MWZk/MzI0YWUzMmIyYzQy/ZjU3OGJmYzNhXzJf/MTIwMHgxMjAwLmpw/ZWc', cache: 'default' }} />
                        <Text style={{ alignSelf: 'center', marginTop: 30, color: 'white', position: 'absolute' }}>Didier Drogba </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { setaskMatch(true), setStatusBarColor('rgba(0,0,0,0.3)') }} style={{
                            marginTop: 10, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke', alignItems: 'center'
                        }}>
                            <Text style={{ color: 'gray', margin: 5, fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>Demande de match</Text>
                            <Ionicons style={{ color: 'gray', }} name="game-controller-outline" size={20} color="black" />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigation.navigate('Integration')} style={{
                            marginTop: 10, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,
                            alignItems: 'center'

                        }}>
                            <Text style={{ color: 'gray', margin: 5, fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>Voir les demandes d'intégration</Text>
                            {/* <Ionicons style={{ color: 'gray', }} name='add-circle-outline' size={20} color={'black'} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ backgroundColor: 'white', marginBottom: 20 }}>
                                <Text style={{ margin: 5, alignSelf: 'center' }}>Paris Saint Germain - FootBall - <Ionicons name='football' size={15} color={'#b07c6d'} /></Text>
                            </View>
                            <AccordionListItem title={
                                <> <Ionicons style={{ margin: 5 }} name='trophy-outline' size={20} color={'#b07c6d'} />  <Text style={{ fontSize: 16, backgroundColor: 'white' }}>Palmarès</Text>  </>}>
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
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", marginTop: 20, }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'black', marginBottom: 10, }}>Marseille <Text style={{ fontWeight: 'bold' }}>14</Text></Text>
                        </View>
                        <View style={{
                            justifyContent: 'center', alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 16, color: 'darkgray', fontWeight: 'bold' }}>Trophées remportés</Text>
                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>1</Text>
                                    <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#bdbfba'} />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>2</Text>
                                    <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#ffd700'} />
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', fontWeight: 'bold' }}>0</Text>
                                    <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#cac5bf'} />
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>2</Text>
                                    <Ionicons style={{ margin: 5, marginTop: 0 }} name='medal-outline' size={25} color={'#b07c6d'} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', marginBottom: 10 }}>Membres de l'équipe</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, flexWrap: "wrap", marginTop: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{
                            marginTop: 0,
                            marginBottom: 10,
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 2 }}
                                defaultSource={require('../image/wainting.png')}
                                source={{
                                    uri: 'https://img.search.brave.com/_r2t_w-DWC8bmp8SbpccPFDJUwP8MAzg__yMxPa9R0g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/emJydXNoY2VudHJh/bC5jb20vdXBsb2Fk/cy9kZWZhdWx0L29w/dGltaXplZC80WC81/L2QvMC81ZDAzNmUx/YjdjNDAxZDQ4MWZk/MzI0YWUzMmIyYzQy/ZjU3OGJmYzNhXzJf/MTIwMHgxMjAwLmpw/ZWc',
                                    cache: 'default'
                                }} />
                            <Text style={{ color: 'darkgray', marginBottom: 10, alignItems: 'center', marginTop: 5, fontWeight: '700' }}>Bull Jimmy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginTop: 0,
                            marginBottom: 10,
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 2 }}
                                defaultSource={require('../image/wainting.png')}
                                source={{
                                    uri: 'https://img.search.brave.com/O2Xcf8m__4vGq_EPnenofeBStw5OLqr_ruI-_KgTViE/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmlsbGJvYXJk/LmNvbS9maWxlcy9t/ZWRpYS9wdXNoYS10/LW1hcmNoLTIwMTYt/YmlsbGJvYXJkLTE1/NDgtY29tcHJlc3Nl/ZC5qcGc',
                                    cache: 'default'
                                }} />
                            <Text style={{ color: 'darkgray', marginBottom: 10, alignItems: 'center', marginTop: 5, fontWeight: '700' }}>Ello yannick</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginTop: 0,
                            marginBottom: 10,
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 100, height: 100, backgroundColor: "lightgray", position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 2 }}
                                defaultSource={require('../image/wainting.png')}
                                source={{
                                    uri: 'https://img.search.brave.com/EzlF3IYiCA028k3EXQCA0AcIHlIpq1-s85LI0WSiKWg/rs:fit:440:440:1/g:ce/aHR0cHM6Ly9maWxl/MS5jbG9zZXJtYWcu/ZnIvdmFyL2Nsb3Nl/cm1hZy9zdG9yYWdl/L2ltYWdlcy9iaW8t/cGVvcGxlL2Jpb2dy/YXBoaWUta2FueWUt/d2VzdC0xMTI0MjEv/ODE4ODI5LTEtZnJl/LUZSL0thbnllLVdl/c3QuanBnP2FsaWFz/PWV4YWN0MTAyNHg3/NjhfbA',
                                    cache: 'default'
                                }} />
                            <Text style={{ color: 'darkgray', marginBottom: 10, alignItems: 'center', marginTop: 5, fontWeight: '700' }}>Jean marc</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ margin: 20, marginTop: 0, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>Ponctualité:</Text>
                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star-half'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star-outline'
                            size={18} color={'lightgray'} />
                    </View>
                </View>
                <View style={{ margin: 20, marginTop: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>FAir play:</Text>
                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star-half'
                            size={18} color={'yellow'} />
                        <Ionicons style={{ marginTop: 0 }}
                            name='star-outline'
                            size={18} color={'lightgray'} />
                    </View>
                </View>
            </View>
        )
    }
    const modalAskmatch = () => {
        return (
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


                    <View style={{ backgroundColor: 'white', padding: 20, flex: 1, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold' }}>Demande de Match</Text>
                            <TouchableOpacity onPress={() => { setaskMatch(false), setStatusBarColor('white') }}>
                                <Ionicons name='close' size={25} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={showDatepicker} style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Date:</Text>
                                <View style={{ marginLeft: 5 }}>
                                    <Text>{date}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={showTimepicker} style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Heures:</Text>
                                <View style={{ marginLeft: 5 }}>
                                    <Text>{hours}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Stade:</Text>
                                <TextInput
                                    style={{
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        fontSize: 16,
                                        flex: 1,
                                        color: "gray",

                                        borderBottomColor: 'gray',
                                        marginLeft: 10
                                    }}
                                    placeholder={'Stade du match'}
                                    placeholderTextColor={"gray"}
                                />
                            </View>

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
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.23,
                                shadowRadius: 2.62,
                                elevation: 4,
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "white",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </Modal>
        )
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1080, 1080],
            quality: 1,
            allowsMultipleSelection: true
        });
        if (!result.cancelled) {
            setpageImage(result.uri);
        }
    };
    const teamebodyPlace = useMemo(() => teamebody(data), [data]);
    const modalAskmatchPlace = useMemo(() => modalAskmatch(hours, date, askMatch, show), [hours, date, askMatch, show]);
    return (
        <View style={{ flex: 1, }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    animated={true}
                    backgroundColor={statusBarColor}
                    barStyle={"dark-content"}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1, }} style={{ flex: 1, width: Dimensions.get('window').width }}>
                    <ImageBackground source={{ uri: pageImage }} resizeMode="cover" style={{
                        height: 200,
                        width: Dimensions.get('window').width,
                        backgroundColor: 'lightgray'
                    }}>
                        <TouchableOpacity onPress={pickImage} style={{
                            zIndex: 3, borderRadius: 5,
                            flexDirection: "row",
                        }}>
                            <Ionicons style={{ margin: 5 }} name='create' size={25} color={'white'} />
                        </TouchableOpacity>
                    </ImageBackground>
                    {teamebodyPlace}
                </ScrollView>
            </SafeAreaView>
            {modalAskmatchPlace}
        </View>


    )
}