import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styleList';
import ComponentItem from './ComponentItem';
import listUser from '../databases/db';

import { Platform } from 'react-native';
//  TypeError: undefined is not an object (evaluating 'response.json')

// =======================
// export const baseUrl = Platform.OS === 'android' ?
//     'http://10.0.2.2:3001'
//     :
//     'http://localhost:3001';

const ComponentList = () => {

    const [data, setData] = useState([]);
    const [zdata, setzdata] = useState(2); // thay doi luong data
    // console.log("🚀 ~ file: ComponentList.js ~ line 11 ~ ComponentList ~ data", data)

    // =======================
    // async function fetch_a() {
    //     console.log("🚀 ~ file: ComponentList.js ~ line 23 ~ fetch_a ~ fetch_a", fetch_a)
    //     let response = await fetch(`${baseUrl}/users`).catch(err => {
    //         // in case in the previous block occurs another error
    //         console.error(err, '27')
    //     });
    //     console.log("🚀 ~ file: ComponentList.js ~ line 25 ~ fetch_a ~ response", response)
    //     let data = await response.json()
    //     console.log("🚀 ~ file: ComponentList.js ~ line 26 ~ fetch_a ~ data", data)
    //     return data;
    // }

    useEffect(() => {
        let db = listUser.db;
        if (zdata === 1) {
            // db = listUser.linkDB;

            
            // =======================
            // console.log("🚀 ~ file: ComponentList.js ~ line 19 ~ useEffect ~ listUser.linkDB", listUser.linkDB)

            // try {
            //     fetch(baseUrl)
            //         .then((response) => response.json())
            //         .then((json) => console.log(json))
            //         .catch(err => {
            //             // in case in the previous block occurs another error
            //             console.error(err, '27')
            //         });
            // } catch (error) {
            //     console.log("🚀 ~ file: ComponentList.js ~ line 30 ~ useEffect ~ error", error)

            // }


            // fetch_a().then(data => console.log(data));


            // fetch('https://jsonplaceholder.typicode.com/posts')
            //     .then((response) => response.json())
            //     .then((json) => console.log(json));

            db=[];
        }
        setData(db);

    }, [zdata]);


    let item = {
        id: 1,
        name: 'A van ',
        location: 'Việt Nam',
    }
    //
    const renderItem = ({ item }) => {
        return (
            <ComponentItem item={item} onClickDel={(item) => onClickDel(item)} />
        )
    }

    function onClickDel(item) {
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
                    data={data}
                    renderItem={renderItem}
                />

            </View>

            <View style={[{
                backgroundColor: '#1E90FF',
                justifyContent: 'space-around'
            }, styles.row]} >

                <TouchableOpacity style={[{
                    padding: 5,
                    paddingHorizontal: 15
                }]} onPress={() => setzdata(1)} >
                    <Icon name="code-json" color="#0000CD" size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={[{
                    padding: 5,
                    paddingHorizontal: 15
                }]} onPress={() => setzdata(2)} >
                    <Icon name="database" color="#0000CD" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ComponentList;