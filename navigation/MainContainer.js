import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import ReportScreen from './screens/ReportScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const videoName = 'Vide';
const reportName = 'Report';
const chatName = 'Chat';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === videoName) {
                            iconName = focused ? 'videocam' : 'videocam-outline';
                        } else if (rn === reportName) {
                            iconName = focused ? 'document' : 'document-outline';
                        } else if (rn === chatName) {
                            iconName = focused ? 'chatbox' : 'chatbox-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: {padding: 10, height: 70}
                }}
            >
                
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={videoName} component={VideoScreen} />
                <Tab.Screen name={reportName} component={ReportScreen} />
                <Tab.Screen name={chatName} component={ChatScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
            
            </Tab.Navigator>
        </NavigationContainer>
    );
}