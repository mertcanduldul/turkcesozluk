import React from 'react'
import { Animated } from 'react-native'
import Box from './box'
import Bg from './bg'
import Search from './search'
import { Logo } from './icons'

const HEROHEIGHT = 200
const BASEHEIGHT = 84
const HERO_DURATION = 300
const NATIVE_DRIVER = false
const OPACITY = 1

export default function HomeSearch({ isSearchFocus, onSearchFocus }) {

    const [heroHeight] = React.useState(new Animated.Value(HEROHEIGHT));
    const [bgOpacity] = React.useState(new Animated.Value(OPACITY));


    React.useEffect(() => {
        if (isSearchFocus) {
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()
            Animated.timing(heroHeight, {
                toValue: BASEHEIGHT,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()

        }
        else {
            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()
            Animated.timing(heroHeight, {
                toValue: HEROHEIGHT,
                duration: HERO_DURATION,
                useNativeDriver: NATIVE_DRIVER
            }).start()

        }
    }, [heroHeight, isSearchFocus, bgOpacity]);

    return (
        <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
            <Box as={Animated.View} style={{ opacity: bgOpacity }} mt={-44}>
                <Bg pt={44} pb={26}>
                    <Box flex={1} alignItems="center" justifyContent="center">
                        <Logo width={120} color="white" />
                    </Box>
                </Bg>
            </Box>
            {/*SEARCH*/}
            <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                <Search onChangeFocus={status => { onSearchFocus(status) }} />
            </Box>
        </Box>
    )
}