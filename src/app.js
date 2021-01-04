import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'
import theme from './utils/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
export default App