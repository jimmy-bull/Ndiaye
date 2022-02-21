import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../view/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../view/SignUp';
import Home from '../view/HomePage';
import Icon from 'react-native-vector-icons/Feather';
import Team from './team';
import Friends from './friend';
import Share from './share';
import Comment from './comment';
import Message from '../view/Message';
import ShowImageConversation from './showImageConversation';
import MessageResponse from './messageRespond';
import Setting from '../view/Setting';
import Statistique from '../view/Statistique';
import Post from '../view/Post';
import CameraPerso from './camera';
import ImageModificator from './imageModifator';
import FullscreenVideo from './fullscreenVideo';
import PostBeforeModification from './postBeforeModification';
import Profile from '../view/Profile';
import SinglePost from './singlePost';
import Notification from '../view/Notification';
import TeamPage from '../view/TeamPage';
import CurrentTeam from '../view/CurrentTeam';
import Integration from '../view/Integration';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopBar = createMaterialTopTabNavigator();

export default function DefineHome({ navigation }) {
    const isLogged = useSelector(state => state.loginReducer.isLogin);
    function AllTabnavigator() {
        return (<Tab.Navigator screenOptions={({ route }) => ({
            // tabBarShowLabel: false,
            tabBarIcon: null,
            headerShown: false,

            tabBarItemStyle: {
                // height: 50,
            },
            tabBarStyle: {
                // position: "absolute",
                // bottom: 25,
                // left: 15,
                // right: 15,
                // elevation: 0,
                // borderRadius: 15,
                // height: 50,
                paddingBottom: 3

            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = "home"
                } else if (route.name === 'Post') {
                    iconName = "plus-square"
                }
                else if (route.name === 'Message') {
                    iconName = "mail"
                }
                else if (route.name === 'Réglage') {
                    iconName = "settings"
                }
                else if (route.name === 'Notification') {
                    iconName = "bell"
                }
                // You can return any component that you like here!
                return <Icon name={iconName} style={{ top: 0 }} size={iconName == "plus-square" ? 20 : 20} color={focused ? "gray" : "black"} />;
            },
        })
        }>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Réglage" component={Setting} />
        </Tab.Navigator>)
    }

    function Search() {
        return (
            <TopBar.Navigator screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: 'none'
                },
                //tabBarLabelStyle: { fontSize: 12,color:"red" },
            }}>
                <TopBar.Screen name="Un ami" component={Friends} />
                <TopBar.Screen name="Une équipe" component={Team} />
            </TopBar.Navigator>
        );
    }
    return (
        <NavigationContainer>
            {isLogged ?
                (
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen name="HomeScreen" component={AllTabnavigator} />
                        <Stack.Screen name="fullscreenVideo" component={FullscreenVideo} />
                        <Stack.Screen name="MessageResponse" component={MessageResponse} />
                        <Stack.Screen name="ShowImageConversation" component={ShowImageConversation} />
                        <Stack.Screen options={{ headerTitle: 'commentaires', headerShown: true, uheaderBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="Comment" component={Comment} />
                        <Stack.Screen options={{ headerTitle: 'Partager', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="Share" component={Share} />
                        <Stack.Screen options={{ headerTitle: 'Rechercher', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="Search" component={Search} />

                        <Stack.Screen name="CameraPerso" component={CameraPerso} />
                        <Stack.Screen name="ImageModificator" component={ImageModificator} />
                        <Stack.Screen name="PostBeforeModification" component={PostBeforeModification} />
                        <Stack.Screen options={{ headerTitle: 'Profil', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="Profile" component={Profile} />
                        <Stack.Screen options={{ headerTitle: 'Toutes les publications', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="SinglePost" component={SinglePost} />
                        <Stack.Screen options={{ headerTitle: 'Equipes', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="TeamPage" component={TeamPage} />
                        <Stack.Screen options={{ headerTitle: 'Page équipe', headerShown: true, headerBackTitle: 'Retour', headerStyle: { backgroundColor: 'white' } }} name="CurrentTeam" component={CurrentTeam} />
                        <Stack.Screen options={{
                            headerTitle: "Demande d'intégration", headerShown: true,
                            headerBackTitle: 'Retour',
                            headerStyle: { backgroundColor: 'white' }
                        }} name="Integration" component={Integration} />
                    </Stack.Navigator>
                )
                :
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen options={{ headerShown: true, headerTitle: 'Inscrivez-vous', headerBackTitle: 'Retour', }} name="SignUp" component={SignUp} />
                </Stack.Navigator>}
        </NavigationContainer>
    );
}
