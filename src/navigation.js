import React from 'react'
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import TabBar from './components/tab-bar'

import SearchView from './view/search'
import FavoriteView from './view/favorite'
import HistoryView from './view/history'
import DetailView from './view/detail'
import Box from './components/box'

import theme from './utils/theme'
import Button from './components/button';

import { Left, More } from './components/icons'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
            <HomeStack.Screen name="Detail" component={DetailView}
                options={({ route, navigation }) => {
                    return {
                        title: (route.params && route.params.title) || 'Boş',
                        headerStyle: {
                            backgroundColor: theme.colors.softRed,
                            shadowColor: 'transparent',
                        },
                        headerLeft: () => (
                            <Button
                                height="100%"
                                px={20}
                                onPress={() => navigation.navigate('Search')}>
                                <Left color={theme.colors.textDark} />
                            </Button>
                        ),
                        headerRight: () => (
                            <Button
                                height="100%"
                                px={20}
                                onPress={() => navigation.navigate('Search')}>
                                <More color={theme.colors.textDark} />
                            </Button>
                        ),
                    }
                }}
            />
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
                <Tab.Screen name="Favorite" component={FavoriteView} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="History" component={HistoryView} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App