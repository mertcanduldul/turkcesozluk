import React from 'react'
import Text from './text'
import { CardContainer, CardSummary, CardTitle } from './card'
import Box from './box'

export default function SuggestionCard({ data, onPress, title, ...props }) {
    return (
        <Box {...props}>
            <Text color="textLight">{title}</Text>

            <CardContainer mt={10} onPress={onPress}>

                <CardTitle>{data?.madde}</CardTitle>
                <CardSummary>{data?.anlam}</CardSummary>

            </CardContainer>
        </Box>
    )
}