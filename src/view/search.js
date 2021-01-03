import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import Box from '../components/box'
import Logo from '../components/icons/Logo'
import Search from '../components/search'

const HomeStack = createStackNavigator();
function SearchView({ navigation }) {
    return (
        <Box>
            <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
            <Box>
                <Logo width={120} color="red" />
            </Box>
            <Box p={10}>
                <Search />
            </Box>
        </Box>
    );
}
export default SearchView;
