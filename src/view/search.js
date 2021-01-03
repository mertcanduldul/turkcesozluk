import React from 'react'
import { FlatList, StatusBar, Animated } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Bg from '../components/bg'
import Logo from '../components/icons/Logo'
import Search from '../components/search'
import theme from '../utils/theme'
import Text from '../components/text'
import { CardContainer, CardSummary, CardTitle } from '../components/card'

function SearchView({ navigation }) {
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
                    <Bg>
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={120} color="white" />
                        </Box>
                    </Bg>}
                {/*SEARCH*/}
                <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                    <Search onChangeFocus={status => { setSearchFocus(status) }} />
                </Box>
            </Box>

            {/* CONTENT */}
            <Box bg="softRed" flex={1} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box p={30} flex={1}>
                        <Text>History</Text>
                    </Box>
                ) : (
                        <Box px={16} py={40} flex={1}>
                            <Box>
                                <Text color="textLight">Bir Deyim</Text>
                                <CardContainer mt={10} onPress={() => navigation.navigate('Detail')}>
                                    <CardTitle>onpara</CardTitle>
                                    <CardSummary>çok az (para)</CardSummary>
                                </CardContainer>
                            </Box>
                            <Box mt={40}>
                                <Text color="textLight">Bir deyim - bir Atasözü</Text>
                                <CardContainer mt={10}>
                                    <CardTitle>siyem siyem ağlamak</CardTitle>
                                    <CardSummary>hafif hafif, ince ince</CardSummary>
                                </CardContainer>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}
export default SearchView
