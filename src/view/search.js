import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import DetailView from './detail'
import Box from '../components/box'
import BoxCenter from '../components/box-center'

import { Bookmark, Clock, Search } from '../components/icons'

const HomeStack = createStackNavigator();
function SearchView({ navigation }) {
    return (
        <BoxCenter>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
        </BoxCenter>
    );
}

function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView} />
            <HomeStack.Screen name="Details" component={DetailView} />
        </HomeStack.Navigator>
    );
}
export default SearchView;
