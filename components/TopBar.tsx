import React, { useState } from 'react';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import { Text, View } from './Themed';
import {
    StyleSheet,
    TouchableOpacity,
    Modal,
    Animated,
    Dimensions,
    SafeAreaView,
    PanResponder,
} from 'react-native';

import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from "@expo/vector-icons/FontAwesome";
import NavigationContainer from "@react-navigation/native";

function TopBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={32} style={{ marginBottom: -3 }} {...props} />;
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function TopBar({ text, buttons, backButton } : { text:string, buttons:boolean, backButton:boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const translateX = useState(new Animated.Value(width))[0];

    const colorScheme = useColorScheme();
    const backgroundColor_ = Colors[colorScheme ?? 'dark'].tint;
    const textColor = Colors[colorScheme ?? 'dark'].text;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        Animated.timing(translateX, {
            toValue: isMenuOpen ? width : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        Animated.timing(translateX, {
            toValue: width,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            const newTranslateX = Math.min(width, Math.max(0, gestureState.dx));
            translateX.setValue(newTranslateX);
        },
        onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dx > 100) {
                closeMenu();
            } else {
                toggleMenu();
            }
        },
    });

    const navigation = useNavigation();

    return (
        <View style={styles.topBar}>

            { backButton ?
            <View style={styles.backButtonStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome size={26} style={{ marginBottom: -3 }} color={textColor} name={'arrow-left'}></FontAwesome>
                </TouchableOpacity>
            </View> : <View></View>
            }

            <Text style={styles.bigText}>{text}</Text>

            { buttons ?
            <View style={styles.menuButton}>
                <Link href={'/notifications'}>
                    <TopBarIcon name={'bell'} color={textColor}></TopBarIcon>
                </Link>
            </View> : <View></View>
            }

            { buttons ?
            <View style={styles.menuButton}>
                <TouchableOpacity onPress={() => toggleMenu()}>
                    <TopBarIcon name={'bars'} color={textColor}></TopBarIcon>
                </TouchableOpacity>
            </View> : <View></View>
            }

            <Animated.View
                style={[{
                    backgroundColor: colorScheme === 'dark' ? '#0f0f0f' : '#fff',
                    width: width*0.8,
                    height: height,
                    position: 'absolute',
                    top: -80,
                    borderLeftWidth: 1,
                    borderLeftColor: colorScheme === 'dark' ? '#4a4a4a' : 'gray',
                    right: 0,
                    zIndex: 100,
                }, { transform: [{ translateX }] }]}
                {...panResponder.panHandlers}
            >


                <View style={styles.menu}>
                    <View style={styles.profileContainer}>
                        <FontAwesome name="user-circle" color={'#bfbfbf'} size={80} style={styles.profileIcon}/>
                        <View style={{flex: 1, backgroundColor: 'transparent', top: 14, paddingLeft: 16}}>
                            <Text style={styles.usernameText}>Username</Text>
                            <Link href={'/profile'}>
                                <Text style={styles.buttonText}>
                                    Go to Profile ►
                                </Text>
                            </Link>
                        </View>
                    </View>
                    <Link href={'/settings'} style={styles.settingsButton}>
                        <View style={styles.settingsContainer}>
                            <FontAwesome name="cog" color={colorScheme === 'light' ? '#fff' : '#333'} size={24} style={{marginRight: 8}}/>
                            <Text style={styles.buttonText}>Settings</Text>
                        </View>
                    </Link>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        position: 'absolute',
        width: '100%',
        height: 52,
        top: '10%',
        display: 'flex',
        flexDirection: 'row',
    },
    menuButton: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigText: {
        width: '70%',
        padding: 10,
        paddingLeft: 24,
        fontWeight: 800,
        fontSize: 32,
        top: 0
    },
    backButtonStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        left: 24,
        top: -3,
    },
    menu: {
        position: 'absolute',
        top: -80,
        paddingTop: 170,
        bottom: 0,
        right: 0,
        width: width * 0.75,
        height: height,
        padding: 20,
        zIndex: 100,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20,
    },
    profileContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    profileIcon: {
        marginBottom: 10
    },
    usernameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#aaa',
        marginBottom: 10,
    },
    settingsButton: {
        backgroundColor: '#bfbfbf',
        top: -6,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    settingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555'
    },
})