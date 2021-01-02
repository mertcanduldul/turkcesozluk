import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import DetailView from './detail'

const HomeStack = createStackNavigator();
function SearchView({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
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
