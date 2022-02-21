import React from 'react';
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
    KeyboardAvoidingView
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
    },
    mainView: {
        padding: 20, backgroundColor: "white", paddingTop: 0, flex: 1,
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 16,
        borderRadius: 5,
        paddingLeft: 40,
        fontWeight: '400', height: 40, flex: 1,
        borderBottomColor: "gray"
    },
    inputParent: {
        marginBottom: 30,
        flexDirection: 'row',
    },
    mainViewSub: {
        padding: 20, justifyContent: "center", paddingTop: 0,
    },
    btn: {
        flex: 1,
        backgroundColor: "#4399fe",
        padding: 15,
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    txtPasseForget: {
        color: "#234066", marginBottom: 15, fontSize: 16,
    }
});
export default function SignUp({ navigation }) {
    return (
        <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
           
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "space-evenly", padding: 20, backgroundColor: "white", paddingTop: 0, }}>
                    <Text style={{ alignSelf: "center", fontSize: 20, color: 'gray', marginBottom: 20, marginTop: 20 }}>Inscrivez-vous</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "#f9f9f9", width: 70, height: 70, margin: 10, borderRadius: 35, justifyContent: "center", marginTop: 0, marginBottom: 0 }}>
                            <IconAnt name="googleplus" style={{ alignSelf: "center" }} size={25} color={'red'} />
                        </View>
                        <View style={{ backgroundColor: "#4399fe", width: 70, height: 70, margin: 10, borderRadius: 35, justifyContent: "center", marginTop: 0, marginBottom: 0 }}>
                            <IconAnt name="facebook-square" style={{ alignSelf: "center" }} size={25} color={'white'} />
                        </View>
                    </View>

                    <View>
                        <Text style={{ padding: 10, paddingTop: 0, color: "gray", marginTop: 10 }}>Prénom</Text>
                        <View style={styles.inputParent}>
                            <Icon name="mail" size={20} style={{ position: "absolute", padding: 10, }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Prénom"
                                placeholderTextColor={"gray"}
                            />
                        </View>
                        <Text style={{ padding: 10, paddingTop: 0, color: "gray" }}>Nom</Text>
                        <View style={styles.inputParent}>
                            <Icon name="mail" size={20} style={{ position: "absolute", padding: 10, }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Nom"
                                placeholderTextColor={"gray"}
                            />
                        </View>
                        <Text style={{ padding: 10, paddingTop: 0, color: "gray" }}>E-mail</Text>
                        <View style={styles.inputParent}>
                            <Icon name="mail" size={20} style={{ position: "absolute", padding: 10, }} />
                            <TextInput
                                style={styles.input}
                                placeholder="jbull635@gmail.com"
                                placeholderTextColor={"gray"}
                            />
                        </View>
                        <Text style={{ padding: 10, paddingTop: 0, color: "gray" }}>Mot de passe</Text>
                        <View style={styles.inputParent}>

                            <Icon name="lock" size={20} style={{ position: "absolute", padding: 10, }} />
                            <TextInput
                                style={styles.input}
                                placeholder="................"
                                placeholderTextColor={"gray"}
                                secureTextEntry={true}
                            />
                        </View>


                    </View>
                    <View style={[styles.inputParent, { flexDirection: 'row', justifyContent: "center", }]}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ fontSize: 16, color: "white", fontWeight: 'bold', alignSelf: "center", }}>Inscrivez-vous</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 16, color: "gray" }}>Avez-vous un compte ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.txtPasseForget}>Se Connecter</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
          
        </KeyboardAvoidingView>
        </SafeAreaView>

    );
}