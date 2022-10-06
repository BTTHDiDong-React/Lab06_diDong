import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from '../themes/styleList';

import color from '../config/color';

const ItemView = ( props ) => {

    let item = props.item;


    return (
        <View style={[styles.row, {
            padding: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: '#D9CEBA',
            marginBottom: 10,
        }]}   >
            <Image
                source={item.linkImg}

                style={[{ width: 75, height: 69 }]}
            />
            <View style={[styles.viewCenterTop, styles.flex_1, { justifyContent: 'space-evenly' }]}  >
                <Text style={[{ fontWeight: '700', fontSize: 15, }]}  >{item.name} shoes-discount {item.discount}%</Text>
                <Text style={[{ fontWeight: '400', fontSize: 15, }]}  >Pls touch to see detail</Text>
            </View>

        </View>
    )
}

export default ItemView;