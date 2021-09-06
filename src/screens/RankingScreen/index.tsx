import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import UserRangeItem from "../../components/UserRankingItem";

const image = require('../../../assets/images/Saly-20.png');

const portfolioCoin = [
    {
        id: '1',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        name: 'Boluwatife',
        networth: 5867989,
    },
    {
        id: '2',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        name: 'Fred',
        networth: 265,
    }, {
        id: '3',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        name: 'Mary',
        networth: 567,
    },
    {
        id: '4',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        name: 'Mariam',
        networth: 265,
    }

]


const RankingScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                style={{width: '100%'}}
                data={portfolioCoin}
                renderItem={({item, index}) => <UserRangeItem user={item} place={index + 1}/>}
                // onRefresh={fetchUsers}
                // refreshing={loading}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    );
};

export default RankingScreen;
