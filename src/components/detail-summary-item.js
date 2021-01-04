import React from 'react'

import Text from './text'
import Box from './box'

export function DetailSummaryItemContainer({ border, children, ...props }) {
    return (
        <Box position="relative"
            py={20}
            px={28}
            bg="white"
            {...props}>

            {border &&
                <Box
                    position="absolute"
                    bg="light"
                    left={12}
                    right={12}
                    top={0}
                    height={2}
                    borderColor="light" />
            }
            <Box flexDirection="row">
                <Text ml={-14} mr={8} color="textLight">1</Text>
                <Text color="red">ISIM</Text>
            </Box>
            <Box mt={8}>{children}</Box>
        </Box>
    )
}

export function DetailSummaryItemTitle({ children, ...props }) {
    return (
        <Text fontSize={14} fontWeight="bold" {...props}>
            {children}
        </Text>
    )
}
export function DetailSummaryItemSummary({ children, ...props }) {
    return (
        <Text ml={10} mt={12} fontSize={14} fontWeight="500" {...props} color="textLight">
            {children}
        </Text>
    )
}