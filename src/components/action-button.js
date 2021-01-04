import React from 'react'
import Button from './button'
import Text from './text'

export function ActionButton({ children, ...props }) {
    return (
        <Button
            {...props}
            borderRadius="full"
            minWidth="actionButton"
            bg="white"
            height="actionButton"
            px={8}
            style={{
                shadowColor: '#000',
                shadowOpacity: 0.16,
                shadowRadius: 4,
                shadowOffset: {
                    width: 0,
                    height: 2
                }
            }}>
            {children}
        </Button>
    )
}
export function ActionButtonTitle({ children, ...props }) {
    return (
        <Text color="textLight" ml={8} fontWeight="bold" {...props}>{children}</Text>
    )
}
