import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from '../themes/styleList';
import color from '../config/color';

const ComponentItem = (props) => {

    const item = props.item;

    const number = item.id;
    const numberText = number < 10 ? `0${number}` : number;


    return (
    <View style={[styles.row,
        {
            width: "100%",
            marginBottom: 5,
            padding: 10,
            paddingHorizontal: 10,
            backgroundColor: '#0ff',
        }]} >
            <Text style={[{ padding: 5, paddingHorizontal: 10, fontWeight: 'bold', color: '#fff', backgroundColor: color.red }]}   >{numberText}</Text>
            <Text style={[styles.flex_1, { padding: 5, paddingHorizontal: 10 }]}   >{item.text}</Text>
        </View>
    )
}


const ComponentList = (props) => {

    const [listData, setlistData] = useState([
        {
            id: 1,
            text: 'AVan',
        },
        {
            id: 2,
            text: 'AVan2',
        },
        {
            id: 3,
            text: 'AVan3',
        },
    ])


    const [txtText, setTxtText] = useState('');


    return (
        <View style={[{}, styles.flex_1]} >
            <View style={[styles.flex_1, styles.viewCenterTop, {

            }]}  >
                <TextInput placeholder='Nhập ngôn ngữ' style={[styles.txtText, {}]}
                    onChangeText={(text) => { setTxtText(text) }}
                />

                <TouchableOpacity style={[styles.btnAdd, {}]}   ><Text style={[{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }]}   >Add</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex_4, {
                padding: 10,
            }]}  >
                {
                    listData.map((item) => {
                        return <ComponentItem key={item.id} item={item} />
                    })
                }
            </View>

            <StatusBar />
        </View>
    )
}

export default ComponentList;