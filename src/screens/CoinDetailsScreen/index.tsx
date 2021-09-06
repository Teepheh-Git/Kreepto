import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {AntDesign} from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";


const CoinDetailsScreen = () => {

    const [coin, setCoin] = useState({

        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        name: 'Boluwatife',
        symbol: "BTC",
        currentPrice: 56,
        valueChange24H: 0.66,
        valueChange1D: -0.24,
        valueChange7D: 0.94,

    });

    const onBuy = () => {

    }
    const onSell = () => {

    }
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{uri: coin.image}}/>
                    <View>
                        <Text style={styles.name}>{coin.name}</Text>
                        <Text style={styles.symbol}>{coin.symbol}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <AntDesign name={'staro'} size={30} color={'#2f95dc'}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.valueContainer}>
                    <Text style={styles.label}>Current price</Text>
                    <Text style={styles.value}>$ {coin.currentPrice}</Text>
                    {/*<Text style={styles.value}>${formatMoney(coin.currentPrice)}</Text>*/}
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coin.valueChange24H}/>
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coin.valueChange1D}/>
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coin.valueChange7D}/>
                    </View>
                </View>
            </View>

            {/*{coin.priceHistoryString && <CoinPriceGraph dataString={coin.priceHistoryString } />}*/}

            <View style={styles.row}>
                <Text>Position</Text>
                <Text>
                    portfoliocoin
                    {/*{coin.symbol} {formatMoney(portfolioCoin?.amount || 0)}*/}
                    {/*{' '}*/}
                    {/*(${formatMoney(coin.currentPrice * (portfolioCoin?.amount || 0))})*/}
                </Text>
            </View>

            <View style={[styles.row, {marginTop: 'auto'}]}>
                <Pressable
                    style={[styles.button, {backgroundColor: '#20b100'}]}
                    onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, {backgroundColor: '#ff0000'}]}
                    onPress={onSell}>
                    <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default CoinDetailsScreen;
