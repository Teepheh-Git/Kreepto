import React from 'react';
import {View, Text, Image, Platform, Pressable} from 'react-native';
import styles from './styles';

const image = require('../../../assets/images/Saly-1.png');
const googleButtonImage = require('../../../assets/images/google-button.png');
const appleButtonImage = require('../../../assets/images/apple-button.png');


const WelcomeScreen = () => {


    const signInApple = () => {

    }
    const signInGoogle = () => {

    }


    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.header1}>Welcome to VCrypto</Text>
            <Text style={styles.header2}>Invest your virtual $100.000 and compete with others</Text>

            <View style={styles.buttonContainer}>
                {Platform.OS === 'ios' && (
                    <Pressable onPress={signInApple} style={styles.googleButton}>
                        <Image style={styles.buttonImage} source={appleButtonImage}/>
                    </Pressable>
                )}

                <Pressable onPress={signInGoogle} style={styles.googleButton}>
                    <Image style={styles.buttonImage} source={googleButtonImage}/>
                </Pressable>
            </View>
        </View>
    );
};

export default WelcomeScreen;
