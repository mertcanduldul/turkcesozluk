import React from 'react'
import { ImageBackground, StatusBar } from 'react-native'

import { createStackNavigator } from "@react-navigation/stack"
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Logo from '../components/icons/Logo'
import Search from '../components/search'
import theme from '../utils/theme'

import bg from '../assets/bg.jpg'
import Text from '../components/text'

const HomeStack = createStackNavigator();
function SearchView({ navigation }) {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(`${theme.colors.red}`);
            StatusBar.setBarStyle("light-content");
        }, [])
    );
    return (
        <Box as={SafeAreaView} bg="red" flex={1}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.red} />
            {/*HEARDER */}
            <Box position="relative" zIndex={1} height={285}>
                <Box as={ImageBackground} source={bg}
                    style={{ width: '100%', height: '100%' }}>
                    {/*LOGO*/}
                    <Box flex={1} alignItems="center" justifyContent="center">
                        <Logo width={120} color="white" />
                    </Box>
                    {/*SEARCH*/}
                    <Box p={16} mb={-42} width="100%">
                        <Search />
                    </Box>
                </Box>
            </Box>
            {/* CONTENT */}
            <Box bg="white" flex={1} pt={26}>
                <Box p={30} flex={1}>
                    <Text>Hello</Text>
                </Box>
            </Box>
        </Box>
    );
}
export default SearchView;
