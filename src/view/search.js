import React from 'react'
import { ImageBackground, StatusBar, Animated } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Logo from '../components/icons/Logo'
import Search from '../components/search'
import theme from '../utils/theme'
import bg from '../assets/bg.jpg'
import Text from '../components/text'

function SearchView() {
    const [heroHeight] = React.useState(new Animated.Value(285));
    const [isSearchFocus, setSearchFocus] = React.useState(false);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(isSearchFocus ? `${theme.colors.softRed}` : `${theme.colors.red}`);
            StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
        }, [isSearchFocus])
    );

    React.useEffect(() => {
        Animated.useNa
        if (isSearchFocus) {
            Animated.timing(heroHeight, {
                toValue: 84,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
        else {
            Animated.timing(heroHeight, {
                toValue: 285,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
    }, [heroHeight, isSearchFocus]);
    return (
        <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
            {/*HEARDER */}
            <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
                {!isSearchFocus &&
                    <Box as={ImageBackground} source={bg}
                        style={{ width: '100%', height: '100%' }}>
                        {/*LOGO*/}
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={120} color="white" />
                        </Box>
                    </Box>}
                {/*SEARCH*/}
                <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                    <Search onChangeFocus={status => { setSearchFocus(status) }} />
                </Box>
            </Box>

            {/* CONTENT */}
            <Box bg="white" flex={1} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box p={30} flex={1}>
                        <Text>History</Text>
                    </Box>
                ) : (
                        <Box p={30} flex={1}>
                            <Text>Öneri</Text>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}
export default SearchView
