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
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import BottomPost from '../view/BottomPost';
export default function SinglePost({ navigation, route }) {
    const { datas } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {
                    datas.map((data, key) => (
                        <>
                            <PostHeader key={data.id} posterName={data.posterName} country={data.country} city={data.city} postType={data.postType} />
                            <PostBody data={data.images} otherData={data} navigation={navigation} />
                            <BottomPost description={data.description} id={data.id} color='white' navigation={navigation} imageDataState={datas} />
                        </>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}