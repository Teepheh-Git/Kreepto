import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const image = require('../../../assets/images/Saly-16.png');


const ProfileScreen = () => {

    const [user, setUser] = useState({

            id: '1',
            name: 'Bolu',
            email: 'bolu@gmail.com',
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            networth: '256787',
        }
    )

    const signOut = () => {
        console.warn('Signing out')
    };
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>

            <View style={styles.userContainer}>
                {/*<Image style={styles.userImage} source={{uri: image}}/>*/}
                <Image style={styles.userImage} source={{uri: user.image}}/>
                <View>
                    {/*<Text style={styles.name}>name</Text>*/}
                    <Text style={styles.name}>{user.name}</Text>
                    {/*<Text style={styles.email}>email</Text>*/}
                    <Text style={styles.email}>{user.email}</Text>
                    <Text style={styles.value}>{user.networth}</Text>
                    {/*<Text style={styles.value}>${formatMoney(user.networth, 0)}</Text>*/}
                </View>
            </View>

            <Pressable
                onPress={signOut}
                style={{marginTop: 'auto'}}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
