import { View, Text, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../themes/styleList';
import ComponentItem from './ComponentItem';
import listUser from '../databases/db';

const ComponentList = () => {

    const [data, setData] = useState([]);
    // console.log("🚀 ~ file: ComponentList.js ~ line 11 ~ ComponentList ~ data", data)

    useEffect(() => {
        let db  = listUser;
      setData(db);
    
    }, []);
    

    let item = {
        id: 1,
        name: 'A van ',
        location: 'Việt Nam',
    }
    //
    const renderItem =  ({item}) => {
        return (
            <ComponentItem item={item} onClickDel={(item) => onClickDel(item)} />
        )
    }

    function  onClickDel(item) {
        console.log("🚀 ~ file: ComponentList.js ~ line 34 ~ onClickDel ~ item", item)
        
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

            <View style={[{
                marginHorizontal: 20,
                marginVertical: 10,
            }, styles.flex_1]}  >
                {/* item */}
                {/* <ComponentItem item={item} /> */}

                <FlatList
                    keyExtractor={item => item.id}
                    data = {data}
                    renderItem  = {renderItem}
                />

            </View>
        </View>
    )
}

export default ComponentList;