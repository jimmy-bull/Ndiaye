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
import { Ionicons } from '@expo/vector-icons';
export default function Integration({ navigation, route }) {
    // const { datas } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginBottom: 20,
                }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            alignItems: 'center',
                        }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                            backgroundColor: "lightgray",
                            position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5,
                        }}
                            defaultSource={require('../image/wainting.png')}
                            source={{ uri: "https://img.search.brave.com/EzlF3IYiCA028k3EXQCA0AcIHlIpq1-s85LI0WSiKWg/rs:fit:440:440:1/g:ce/aHR0cHM6Ly9maWxl/MS5jbG9zZXJtYWcu/ZnIvdmFyL2Nsb3Nl/cm1hZy9zdG9yYWdl/L2ltYWdlcy9iaW8t/cGVvcGxlL2Jpb2dy/YXBoaWUta2FueWUt/d2VzdC0xMTI0MjEv/ODE4ODI5LTEtZnJl/LUZSL0thbnllLVdl/c3QuanBnP2FsaWFz/PWV4YWN0MTAyNHg3/NjhfbA", cache: 'default' }} />
                        <Text style={{
                            color: 'darkgray', marginBottom: 10, alignItems: 'center',
                            marginTop: 100, zIndex: 3, position: 'absolute',
                        }}>Jean marc</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-evenly', }}>
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center', marginBottom: 10,
                            justifyContent: 'center', flexDirection: "row", backgroundColor: "#4399fe",
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'white', margin: 5 }}>Accepter</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'gray', margin: 5 }}>Refuser</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginBottom: 20,
                }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            alignItems: 'center',
                        }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                            backgroundColor: "lightgray",
                            position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5,
                        }}
                            defaultSource={require('../image/wainting.png')}
                            source={{ uri: "https://img.search.brave.com/O2Xcf8m__4vGq_EPnenofeBStw5OLqr_ruI-_KgTViE/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmlsbGJvYXJk/LmNvbS9maWxlcy9t/ZWRpYS9wdXNoYS10/LW1hcmNoLTIwMTYt/YmlsbGJvYXJkLTE1/NDgtY29tcHJlc3Nl/ZC5qcGc", cache: 'default' }} />
                        <Text style={{
                            color: 'darkgray', marginBottom: 10, alignItems: 'center',
                            marginTop: 100, zIndex: 3, position: 'absolute',
                        }}>Jean marc</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-evenly', }}>
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center', marginBottom: 10,
                            justifyContent: 'center', flexDirection: "row", backgroundColor: "#4399fe",
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'white', margin: 5 }}>Accepter</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'gray', margin: 5 }}>Refuser</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginBottom: 20,
                }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            alignItems: 'center',
                        }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                            backgroundColor: "lightgray",
                            position: "relative", zIndex: 1, resizeMode: 'cover', borderRadius: 5,
                        }}
                            defaultSource={require('../image/wainting.png')}
                            source={{ uri: "https://img.search.brave.com/_r2t_w-DWC8bmp8SbpccPFDJUwP8MAzg__yMxPa9R0g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/emJydXNoY2VudHJh/bC5jb20vdXBsb2Fk/cy9kZWZhdWx0L29w/dGltaXplZC80WC81/L2QvMC81ZDAzNmUx/YjdjNDAxZDQ4MWZk/MzI0YWUzMmIyYzQy/ZjU3OGJmYzNhXzJf/MTIwMHgxMjAwLmpw/ZWc", cache: 'default' }} />
                        <Text style={{
                            color: 'darkgray', marginBottom: 10, alignItems: 'center',
                            marginTop: 100, zIndex: 3, position: 'absolute',
                        }}>Jean marc</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-evenly', }}>
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center', marginBottom: 10,
                            justifyContent: 'center', flexDirection: "row", backgroundColor: "#4399fe",
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'white', margin: 5 }}>Accepter</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{
                            width: 120, borderRadius: 5, alignSelf: 'center',
                            justifyContent: 'center', flexDirection: "row", backgroundColor: 'whitesmoke',
                            borderRadius: 5,
                        }}>
                            <Text style={{ color: 'gray', margin: 5 }}>Refuser</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}