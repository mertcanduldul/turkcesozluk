import React from 'react'
import { StatusBar, Text } from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

export default function HistoryView() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff');
        }, [])
    );
    return (
        <Box as={SafeAreaView} flex={1}>
            <Text>HISTORY!</Text>
        </Box>
    )
}