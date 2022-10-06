import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../themes/styleList';
import color from '../config/color';

const ComponentItem = (props) => {

    const item = props.item;

    const number = item.id;
    const numberText = number < 10 ? `0${number}` : number;

    const numberColor = number % 2 === 0 ? styles.colorOrange : styles.colorYellow;

    // const clickDel = () =>{
    // console.log("🚀 ~ file: ComponentItem.js ~ line 18 ~ clickDel ~ clickDel")
    // props.funDelItem;
    // }

    return (
        <View style={[styles.row,
        {
            width: "100%",
            marginBottom: 5,
            padding: 10,
            paddingHorizontal: 10,
            backgroundColor: '#0ff',
            borderRadius: 5,
        }]} >
            <Text style={[numberColor, { borderRadius: 5, padding: 5, paddingHorizontal: 10, fontWeight: 'bold', color: '#fff' }]}   >{numberText}</Text>
            <Text style={[styles.flex_1, { padding: 5, paddingHorizontal: 10 }]}   >{item.text}</Text>

            <TouchableOpacity onPress={props.funDelItem} >
                <Text style={[{
                borderRadius: 5,
                padding: 5,
                paddingHorizontal: 10,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: color.red,
                textTransform: 'uppercase',
                }]} >Del</Text></TouchableOpacity>
        </View>
    )
};

export default ComponentItem;
