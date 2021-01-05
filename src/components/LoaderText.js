import React from 'react'

import Text from './text'
import Box from './box'

export function LoaderText({ border, children, ...props }) {
    return (
        <Box
            bg="light"
            width={120}
            height={16}
            {...props}
        >

        </Box>
    )
}

