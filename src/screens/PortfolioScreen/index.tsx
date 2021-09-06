import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import PortfolioCoin from "../../components/PortfolioCoin";

const image = require('../../../assets/images/Saly-10.png');

const portfolioCoin = [
    {
        amount: 56,
        coin: {
            id: '1',
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            name: 'BTC',
            symbol: 'BTC',
            currentPrice: 567,
        },
    },
    {

        amount: 59,
        coin: {
            id: '2',
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            name: 'ETH',
            symbol: 'ETH',
            currentPrice: 265,
        },
    }, {
        amount: 56,
        coin: {
            id: '3',
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            name: 'BTC',
            symbol: 'BTC',
            currentPrice: 567,
        },
    },
    {

        amount: 59,
        coin: {
            id: '4',
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            name: 'ETH',
            symbol: 'ETH',
            currentPrice: 265,
        },
    }

]


const PortfolioScreen = () => {
    return (

        <View style={styles.root}>
            <FlatList
                style={{width: '100%'}}
                data={portfolioCoin}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item}/>}
                // onRefresh={fetchPortfolio}
                // refreshing={loading}
                keyExtractor={item => item.coin.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label}>Portfolio balance</Text>
                            <Text style={styles.balance}>$45,667</Text>
                            {/*<Text style={styles.balance}>${formatMoney(balance)}</Text>*/}
                        </View>
                    </>
                )}
            />
        </View>


    )
        ;
};

export default PortfolioScreen;
