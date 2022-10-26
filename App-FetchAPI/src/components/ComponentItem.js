import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../themes/styleList';

const ComponentItem = (props) => {
    // console.log("🚀 ~ file: ComponentItem.js ~ line 7 ~ ComponentItem ~ props", props)

    let { item, onClickDel } = props;

    let number = item.id;
    let numberStr = number < 10 ? `0${number}` : number;

    return (
        <View style={[{
            backgroundColor: '#FFA07A',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 5
        }, styles.row]} >
            <Text style={[{
                padding: 5,
                paddingHorizontal: 12,
                backgroundColor: '#0f0',
                borderRadius: 5,
                fontSize: 15,
                fontWeight: 'bold',
                height: 32,
                color: '#fff',
            }]}  >{numberStr}</Text>

            <Text style={[{
                padding: 5,
                paddingHorizontal: 12,
                borderRadius: 5,
                maxWidth: 220,
            }, styles.flex_1]}  >{item.name} -- {item.location}</Text>

            <TouchableOpacity 
                onPress={() => onClickDel(item)}
            >
                <Text style={[{
                    padding: 5,
                    paddingHorizontal: 12,
                    backgroundColor: '#f00',
                    borderRadius: 5,
                    fontSize: 15,
                    fontWeight: 'bold',
                    height: 32,
                    color: '#fff',
                }]}  >DEL</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ComponentItem;