import { View, Text, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../themes/styleList';
import ItemView from './ItemView';

import color from '../config/color';

const ComponentList = ( {navigation} ) => {

    let db = [
        {
            id: 0,
            name: 'Nike',
            discount: 20,
            linkImg: require('../images/imgShoes_1.png'),
        },
        {
            id: 1,
            name: 'adidas',
            discount: 60,
            linkImg: require('../images/imgShoes_2.png'),
        },
        {
            id: 2,
            name: 'Nike',
            discount: 50,
            linkImg: require('../images/imgShoes_3.png'),
        },
        {
            id: 3,
            name: 'Yonex',
            discount: 40,
            linkImg: require('../images/imgShoes_4.png'),
        },
        {
            id: 4,
            name: 'Victor',
            discount: 100,
            linkImg: require('../images/imgShoes_5.png'),
        },
        {
            id: 5,
            name: 'Lining',
            discount: 30,
            linkImg: require('../images/imgShoes_6.png'),
        },
        {
            id: 6,
            name: 'AVan',
            discount: 45,
            linkImg: require('../images/imgShoes_7.png'),
        },
        {
            id: 7,
            name: 'Reebok',
            discount: 20,
            linkImg: require('../images/imgShoes_8.png'),
        },
        {
            id: 8,
            name: 'AVan',
            discount: 20,
            linkImg: require('../images/imgShoes_9.png'),
        },
    ]

    const [dataBD, setdataBD] = useState([]);

    useEffect(() => {
        setdataBD(db);
    }, [])

    const onClickItem = (item) => {
        navigation.navigate('Detail', item={item})
    }

    //
    const renderItem = ({ item }) => {
        return (
            <ItemView item={item} onClickItem={(item) => onClickItem(item)}/>
        )
    }

    return (
        <SafeAreaView style={[styles.flex_1, { padding: 20, backgroundColor: '#FFF9F9' }]}>
            <StatusBar />
            <Text style={[  {
                textAlign:'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textTransform: 'uppercase',
                color: '#0f0',
            }]} >My shop</Text>
            
            <FlatList
                data={dataBD}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Text>ComponentList</Text>
        </SafeAreaView>
    )
}

export default ComponentList;