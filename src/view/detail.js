import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import Box from '../components/box'
import Text from '../components/text'
import { ActionButton, ActionButtonTitle } from '../components/action-button'
import theme from '../utils/theme'
import { DetailSummaryItemContainer, DetailSummaryItemTitle, DetailSummaryItemSummary } from '../components/detail-summary-item'

import { Favorite, SoundSolid, Hand } from '../components/icons'

export default function DetailView() {
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
                    <Text fontSize={32} fontWeight="bold">Kalem</Text>
                    <Text color="textLight" mt={6}>Arapça Kalem</Text>
                </Box>
                <Box flexDirection="row" mt={24}>
                    <ActionButton>
                        <SoundSolid width={24} height={24} color={theme.colors.red} />
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
                    <DetailSummaryItemContainer>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                    <DetailSummaryItemContainer border>
                        <DetailSummaryItemTitle>
                            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç
                    </DetailSummaryItemTitle>
                        <DetailSummaryItemSummary>
                            "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                    </DetailSummaryItemContainer>
                </Box>
            </Box>
        </Box>
    )
}
