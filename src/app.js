import React from 'react'
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import TabBar from './components/tab-bar'

import SearchView from './view/search'
import FavoriteView from './view/favorite'
import HistoryView from './view/history'
import DetailView from './view/detail'
import Box from './components/box'

import theme from './utils/theme'

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
        <ThemeProvider theme={theme}>
            <Box flex={1} as={SafeAreaView}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Favorite" component={FavoriteView} />
                        <Tab.Screen name="Search" component={SearchStack} />
                        <Tab.Screen name="History" component={HistoryView} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Box>
        </ThemeProvider>
    );
}
export default App;