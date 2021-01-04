import React from 'react'
import { FlatList, StatusBar, Animated } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Bg from '../components/bg'
import Logo from '../components/icons/Logo'
import Search from '../components/search'
import theme from '../utils/theme'
import Text from '../components/text'
import { CardContainer, CardSummary, CardTitle } from '../components/card'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const HEROHEIGHT = 200
const BASEHEIGHT = 84
const HERO_DURATION = 300
const NATIVE_DRIVER = false
const OPACITY = 1
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item 1',
        summary: 'açıklama 1'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item 2',
        summary: 'açıklama 2'
    },
    {
        id: '58694a06-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    },
    {
        id: '58694a05-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    },
    {
        id: '58694a04-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    },
    {
        id: '58694a03-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    },
    {
        id: '58694a02-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    },
    {
        id: '58694a01-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    }
]


function SearchView({ navigation }) {
    const [heroHeight] = React.useState(new Animated.Value(HEROHEIGHT));
    const [bgOpacity] = React.useState(new Animated.Value(OPACITY));
    const [isSearchFocus, setSearchFocus] = React.useState(false);

    const [homeData, setHomeData] = React.useState(null)

    const getHomeData = async () => {
        const response = await fetch("https://sozluk.gov.tr/icerik");
        const data = await response.json();
        setHomeData(data)
    }
    React.useEffect(() => {
        getHomeData();
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(isSearchFocus ? `${theme.colors.softRed}` : `${theme.colors.red}`);
            StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
        }, [isSearchFocus])
    );
    React.useEffect(() => {
        if (isSearchFocus) {
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()
            Animated.timing(heroHeight, {
                toValue: BASEHEIGHT,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()

        }
        else {
            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()
            Animated.timing(heroHeight, {
                toValue: HEROHEIGHT,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()

        }
    }, [heroHeight, isSearchFocus, bgOpacity]);
    return (
        <Box as={SafeAreaView} flex={1}>
            {/*HEARDER */}
            <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
                <Box as={Animated.View} style={{ opacity: bgOpacity }} mt={-44}>
                    <Bg pt={44} pb={26}>
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={120} color="white" />
                        </Box>
                    </Bg>
                </Box>
                {/*SEARCH*/}
                <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                    <Search onChangeFocus={status => { setSearchFocus(status) }} />
                </Box>
            </Box>

            {/* CONTENT */}
            <Box bg="softRed" flex={1} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box flex={1}>
                        <FlatList
                            style={{ padding: 16 }}
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                            (
                                <Box py={6}>
                                    <SimpleCardContainer>
                                        <SimpleCardTitle>{item.title}</SimpleCardTitle>
                                    </SimpleCardContainer>
                                </Box>
                            )}
                            ListHeaderComponent={
                                <Text color="textLight" mb={10}>SON ARAMALAR</Text>
                            }
                        />
                    </Box>
                ) : (
                        <Box px={16} py={40} flex={1}>
                            <Box>
                                <Text color="textLight">Bir Kelime</Text>
                                <CardContainer mt={10} onPress={(title) => navigation.navigate('Detail', { title: 'onpara' })}>
                                    <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                                    <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                                </CardContainer>
                            </Box>
                            <Box mt={40}>
                                <Text color="textLight">Bir deyim - bir Atasözü</Text>
                                <CardContainer mt={10}>
                                    <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                                    <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
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
