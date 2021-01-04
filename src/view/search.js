import React from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import theme from '../utils/theme'
import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from '../components/home-search'

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
    const [isSearchFocus, setSearchFocus] = React.useState(false);
    const [homeData, setHomeData] = React.useState(null)

    const getHomeData = async () => {
        const response = await fetch("https://sozluk.gov.tr/icerik");
        const data = await response.json();
        setHomeData(data);
    }

    React.useEffect(() => {
        getHomeData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor(isSearchFocus ? `${theme.colors.softRed}` : `${theme.colors.red}`);
            StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
        }, [isSearchFocus])
    );

    return (
        <Box as={SafeAreaView} flex={1}>
            {/*HEARDER */}
            <HomeSearch isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus} />
            {/* CONTENT */}
            <Box bg="softRed" flex={1} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box flex={1}>
                        <SearchHistoryList data={DATA} />
                    </Box>
                ) : (
                        <Box px={16} py={40} flex={1}>
                            <SuggestionCard
                                data={homeData?.kelime[0]}
                                title="Bir Kelime"
                                onPress={() => navigation.navigate('Detail', { title: homeData?.kelime[0].madde })}
                            />
                            <SuggestionCard
                                data={homeData?.atasoz[0]}
                                title="Bir deyim - bir Atasözü"
                                onPress={() => navigation.navigate('Detail', { title: homeData?.atasoz[0].madde })}
                                mt={40}
                            />
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}
export default SearchView