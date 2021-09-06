import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import MarketCoin from "../../components/MarketCoin";


const marketCoin = [{
    id: '1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    valueChange24H: 0.766,
    currentPrice: 45,
}, {
    id: '2',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'Ethereum',
    symbol: 'BTC',
    valueChange24H: 0.766,
    currentPrice: 45,
}, {
    id: '3',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'Apex',
    symbol: 'BTC',
    valueChange24H: -5.766,
    currentPrice: 45,
}, {
    id: '4',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'Seele',
    symbol: 'BTC',
    valueChange24H: 0.766,
    currentPrice: 45,
}, {
    id: '5',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'County',
    symbol: 'BTC',
    valueChange24H: -0.766,
    currentPrice: 45,
},
]


const image = require('../../../assets/images/Saly-17.png');


const MarketScreen = () => {
    return (
        <View style={styles.root}>
            <
                FlatList
                style={{width: '100%'}}
                data={marketCoin}
                // data={coins}
                // onRefresh={fetchCoins}
                // refreshing={loading}
                renderItem={({item}) => <MarketCoin marketCoin={item}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <Text style={styles.label}>Market</Text>
                    </>
                )}
            />
        </View>
    );
};

export default MarketScreen;
