import * as React from 'react'

import Text from './text'
import Button from './button'

export function SimpleCardContainer({ children, ...props }) {
    return (
        <Button justifyContent="flex-start" p={16} bg="white" borderRadius="normal" {...props}>
            {children}
        </Button>
    )
}
export function SimpleCardTitle({ children }) {
    return (
        <Text fontSize={16} fontWeight="bold">{children}</Text>
    )
}
