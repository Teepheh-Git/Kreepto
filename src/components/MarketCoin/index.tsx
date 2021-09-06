import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'
import PercentageChange from "../PercentageChange";
// import PercentageChange from "../PercentageChange";
// import formatMoney from "../../utils/formatMoney";

export interface MarketCoinProps {
    marketCoin: {
        id: string,
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        currentPrice: number,
    }
}

const MarketCoin = (props: MarketCoinProps) => {
    const {
        marketCoin: {
            id,
            image,
            name,
            symbol,
            valueChange24H,
            currentPrice,
        },
    } = props;

    const navigation = useNavigation();

    return (
        <Pressable style={styles.root} onPress={
            // @ts-ignore
            () => navigation.navigate('CoinDetails', { id })
        }>
            <View style={styles.left}>
                <Image style={styles.image} source={{uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                {/*<Text style={styles.value}>$56,334</Text>*/}
                {/*<Text style={styles.value}>${formatMoney(currentPrice)}</Text>*/}
                <PercentageChange value={valueChange24H}/>
            </View>
        </Pressable>
    );
};

export default MarketCoin;
