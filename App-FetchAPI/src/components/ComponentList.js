import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import styles from '../themes/styleList';

const ComponentList = () => {

let item = {
    id : 1,
    name : 'A van',
    location: 'VN',
}

    return (
        <View style={[styles.flex_1, {}]}>
            <StatusBar />
            <View style={[{
                width: '100%',
                backgroundColor: '#ff0',
            }]} >
                <Text style={[{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 20,
                }]} >Danh sách người dùng</Text>
            </View>

            <View style={[{}, styles.flex_1]}  >

                <View   style= {[{ }  ]} >

                </View>

            </View>
        </View>
    )
}

export default ComponentList;