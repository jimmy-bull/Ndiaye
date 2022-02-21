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
import AccordionListItem from '../components/AccordionListItem';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';
import * as React from 'react';

export default function TeamPage({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Vos équipes</Text>
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
                            <Text style={{ alignSelf: 'center', marginTop: 10 }}>Paris SAint Germain</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} name='trash-outline' size={20} color={'#b07c6d'} />
                            <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 5, fontSize: 10 }}>Supprimer</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        width: 160, height: 160, borderWidth: 1,
                        justifyContent: 'center', borderColor: "lightgray", borderRadius: 5,
                        marginTop: 30,backgroundColor:'whitesmoke'
                    }}>
                        <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} name='add-circle-outline' size={30} color={'black'} />
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Ajouter une équipe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

styles = StyleSheet.create({

})
