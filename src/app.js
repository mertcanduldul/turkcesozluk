import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'



import SearchView from './view/search'
import FavoriteView from './view/favorite'
import HistoryView from './view/history'
import DetailView from './view/detail'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView} />
            <HomeStack.Screen name="Detail" component={DetailView} />
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Favorite" component={FavoriteView} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="History" component={HistoryView} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;