import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    Platform,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,
    Alert
} from "react-native";
import {useRoute} from "@react-navigation/native";
import styles from "./styles";

const image = require('../../../assets/images/Saly-31.png');

const CoinExchangeScreen = () => {

    const [coinAmount, setCoinAmount] = useState('')
    const [coinUSDValue, setCoinUSDValue] = useState('')
    const [usdPortfolioCoin, setUsdPortfolioCoin] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const maxUSD = 100000

    const route = useRoute()

    const onSellAll = () => {
    }

    const onBuyAll = () => {
    }
    const onPlaceOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
            Alert.alert('Error', `Not enough USD coins. Max: ${maxUSD}`);
            return;
        }
        if (!isBuy && parseFloat(coinAmount) > coin.amount) {
            Alert.alert('Error', `Not enough ${coin.symbol} coins. Max: ${coin.amount}`);
            return;
        }

    }

    // @ts-ignore
    const isBuy = route?.params?.isBuy
    // @ts-ignore
    const coin = route?.params?.coin

    useEffect(() => {
        const amount = parseFloat(coinAmount)
        if (!amount && amount !== 0) {
            setCoinAmount("")
            setCoinUSDValue("")
            return;
        }

        setCoinUSDValue((amount * coin?.currentPrice).toString())
    }, [coinAmount])

    useEffect(() => {
        const amount = parseFloat(coinUSDValue)
        if (!amount && amount !== 0) {
            setCoinAmount("")
            setCoinUSDValue("")
            return;
        }

        setCoinAmount((amount / coin?.currentPrice).toString())
    }, [coinUSDValue])


    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
        >
            <Text style={styles.title}>
                {isBuy ? 'Buy ' : "Sell "}
                {coin?.name}
            </Text>
            <Text style={styles.subtitle}>
                1 {coin?.symbol}
                {' = '}
                {coin?.currentPrice}
                {/*${formatMoney(coin?.currentPrice)}*/}
            </Text>
            <Image style={styles.image} source={image}/>

            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinAmount}
                        onChangeText={setCoinAmount}
                    />
                    <Text>{coin?.symbol}</Text>
                </View>
                <Text style={{fontSize: 30}}>=</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinUSDValue}
                        onChangeText={setCoinUSDValue}
                    />
                    <Text>USD</Text>
                </View>
            </View>

            {isBuy ? (
                <Pressable onPress={onBuyAll}>
                    <Text style={{color: '#0097ff'}}>Buy max</Text>
                </Pressable>
            ) : (
                <Pressable onPress={onSellAll}>
                    <Text style={{color: '#0097ff'}}>Sell all</Text>
                </Pressable>
            )}

            <Pressable style={styles.button} onPress={onPlaceOrder}>
                <Text style={styles.buttonText}>Place Order</Text>
                {isLoading && <ActivityIndicator color={'white'}/>}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default CoinExchangeScreen;
