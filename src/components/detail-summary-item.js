import React from 'react'

import Text from './text'
import Box from './box'

export default function DetailSummaryItemContainer({ data, border, children, ...props }) {
    const type = data?.ozelliklerListe && data.ozelliklerListe.map(_ => _.tam_adi) || ['isim']
    return (
        <Box position="relative" py={20} px={28} bg="white"{...props}>
            {border && (
                <Box position="absolute" bg="light" left={12} right={12} top={0} height={2} borderColor="light" />
            )}
            {/*Body*/}
            {data ? (
                <Box>
                    <Box flexDirection="row">
                        <Text ml={-14} mr={8} color="textLight">{data.anlam_sira}</Text>
                        <Text color="red">{type.join(', ')}</Text>
                    </Box>
                    <Box mt={8}>
                        <Text fontWeight="bold">{data.anlam}</Text>
                        {data.orneklerListe && data.orneklerListe.map(ornek =>
                            <Box key={ornek.ornek_id}>
                                <Text ml={10} mt={12} color="textLight" fontWeight="500">
                                    {ornek.ornek}
                                    <Text fontWeight="bold" color="textLight">
                                        {ornek.yazar_id !== "0" && `-${ornek.yazar[0].tam_adi}`}
                                    </Text>
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Box>
            ) : (children)}
        </Box>
    )
}