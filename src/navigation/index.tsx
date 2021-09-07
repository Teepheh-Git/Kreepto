/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import MarketScreen from "../screens/MarketScreen";
import RankingScreen from "../screens/RankingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import CoinExchangeScreen from "../screens/CoinExchangeScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="CoinDetails" component={CoinDetailsScreen}
                          options={{title: 'Price Data', animation: 'slide_from_left'}}/>
            <Stack.Screen name="CoinExchange" component={CoinExchangeScreen}
                          options={{title: 'Coin Exchange', animation: 'slide_from_left'}}/>
            {/*<Stack.Group screenOptions={{presentation: 'modal'}}>*/}
            {/*    <Stack.Screen name="Modal" component={ModalScreen}/>*/}
            {/*</Stack.Group>*/}
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerShown: false
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={({navigation}: RootTabScreenProps<'Home'>) => ({
                    title: 'Home',
                    tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color}/>,
                })}
            />
            <BottomTab.Screen
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    title: 'Portfolio',
                    tabBarIcon: ({color}) => <AntDesign name="piechart" size={24} color={color}/>,
                }}
            />

            <BottomTab.Screen
                name="Market"
                component={MarketScreen}
                options={{
                    title: 'Market',
                    tabBarIcon: ({color}) => <FontAwesome5 name="chart-line" size={24} color={color}/>,
                }}
            />

            <BottomTab.Screen
                name="Rankings"
                component={RankingScreen}
                options={{
                    title: 'Rankings',
                    tabBarIcon: ({color}) => <MaterialIcons name="leaderboard" size={24} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color}/>,
                }}
            />


        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
