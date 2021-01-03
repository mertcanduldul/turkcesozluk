import React from 'react'
import { View, Text, Platform } from 'react-native'

import Button from './button'
import { Search, Bookmark, Clock } from './icons'
import Box from './box'

import theme from '../utils/theme'


function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box flexDirection="row" pb={Platform.OS == 'ios' ? 20 : 0}
      style={{ shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 24 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search color="white" />
            </Button>
          </Box>
        ) : (
            <Button key={label} pt={6} flexDirection="column" height={56} flex={1} onPress={onPress}>
              {label === 'History' && <Bookmark color={isFocused ? theme.colors.red : theme.colors.textLight} />}
              {label === 'Favorite' && <Clock color={isFocused ? theme.colors.red : theme.colors.textLight} />}
              <Box size={4} bg={isFocused ? 'red' : 'white'} mt={6} borderRadius="full" />
            </Button>
          )
      })}
    </Box>
  );
}

export default TabBar;