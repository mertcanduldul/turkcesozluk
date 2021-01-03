import React from 'react'
import { Keyboard } from 'react-native'

import Text from './text'
import Box from './box'
import Input from "./input";
import Button from './button'
import { Search, Close } from './icons'

import theme from '../utils/theme'

function SearchBox() {
    const [value, setValue] = React.useState("");
    const [isFocus, setFocus] = React.useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss();
    }
    const onClear = () => {
        setValue("");
    }

    return (
        <Box flexDirection="row" alignItems="center">
            <Box position="relative" flex={1}>
                <Input
                    style={{ shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 24, shadowOffset: { width: 0, height: 4 } }}
                    height={52}
                    pl={52}
                    color="textDark"
                    borderWidth={1}
                    borderColor={isFocus ? '#D1D1D1' : 'transparent'}
                    borderRadius="normal"
                    placeholder="Türkçe Sözlük'te Ara"
                    placeholderTextColor="textMedium"
                    bg="#e1e1e1"
                    value={value}
                    onFocus={() => setFocus(true)}
                    onChangeText={text => setValue(text)}
                />

                {value.length > 0 &&
                    <Button onPress={onClear} position="absolute" right={16} top={14}>
                        <Close color={theme.colors.textDark} />
                    </Button>
                }
                <Button position="absolute" left={16} top={14}>
                    <Search color={theme.colors.textMedium} />
                </Button>
            </Box>
            {isFocus && (
                <Button onPress={onCancel} px={15} height={52}>
                    <Text>Vazgeç</Text>
                </Button>
            )}
        </Box>
    )
}
export default SearchBox