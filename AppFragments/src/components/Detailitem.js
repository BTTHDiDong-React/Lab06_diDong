import { View, Text } from 'react-native'
import React from 'react'

const Detailitem = ({ route, navigation }) => {

    const { item } = route.params;
    console.log("🚀 ~ file: Detailitem.js ~ line 8 ~ Detailitem ~ item", item)
    return (
        <View>
            <Text>Detailitem</Text>
        </View>
    )
}

export default Detailitem;