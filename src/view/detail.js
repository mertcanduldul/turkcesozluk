import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import Box from '../components/box'
import Text from '../components/text'
import { ActionButton, ActionButtonTitle } from '../components/action-button'
import theme from '../utils/theme'
import DetailSummaryItemContainer from '../components/detail-summary-item'

import { Favorite, SoundSolid, Hand } from '../components/icons'
import { LoaderText } from '../components/LoaderText'

export default function DetailView({ route }) {
    const keyword = route.params?.keyword;
    const [data, setData] = React.useState(null);

    const getDetailData = async () => {
        const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
        const data = await response.json();
        setData(data[0]);
    }
    React.useEffect(() => {
        getDetailData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('white')
        }, [])
    )
    return (
        <Box as={SafeAreaView} bg="#e1e1e1" flex={1}>
            <Box as={ScrollView} showsVerticalScrollIndicator={false} p={16}>
                <Box>
                    <Text fontSize={32} fontWeight="bold">{route.params?.keyword}</Text>
                    {(data?.teleffuz || data?.lisan) ? <Text color="textLight" mt={6}>
                        {data?.teleffuz && data?.teleffuz}
                        {data?.lisan}
                    </Text>
                        : null}
                </Box>
                <Box flexDirection="row" mt={24}>
                    <ActionButton>
                        <SoundSolid width={24} height={24} color={theme.colors.textLight} />
                    </ActionButton>
                    <ActionButton ml={12}>
                        <Favorite width={24} height={24} color={theme.colors.textLight} />
                    </ActionButton>
                    <ActionButton ml="auto">
                        <Hand width={24} height={24} color={theme.colors.textLight} />
                        <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
                    </ActionButton>
                </Box>
                <Box mt={32}>
                    {data ? data.anlamlarListe.map(item => (
                        <DetailSummaryItemContainer data={item} border={item.anlam_sira !== "1"} key={item.anlam_sira} />
                    )) : [1, 2, 3].map(index => (
                        <DetailSummaryItemContainer border={index !== 1} key={index}>
                            <LoaderText />
                            <LoaderText width={200} mt={10} />
                        </DetailSummaryItemContainer>
                    ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
