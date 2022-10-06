import { View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from '../themes/styleList';
import color from '../config/color';
import ComponentItem from './ComponentItem';

const ComponentList = (props) => {

    let db = [
        {
            id: 1,
            text: 'Java',
        },
        {
            id: 2,
            text: 'JavaScript',
        },
        {
            id: 3,
            text: 'PHP',
        },
    ];

    const [listData, setlistData] = useState([])

    useEffect(() => {
        setlistData(db)
    }, []);


    const [txtText, setTxtText] = useState('');

    //
    function funClickAdd() {
        console.log("🚀 ~ file: ComponentList.js ~ line 75 ~ funClickAdd ~ funClickAdd")
        if (txtText.length == 0) {
            return;
        }
        let val_end = listData[listData.length-1]  ;//   gia tri cuoi trong list
        let idnew =  val_end.id + 1;
        let val = { id: idnew, text: txtText }
        setlistData([...listData, val]);

    }
    //
    const funDeleteItem = (index) => {
        console.log("🚀 ~ file: ComponentList.js ~ line 48 ~ funDeleteItem ~ funDeleteItem ")

        let a_val = listData[index];
        Alert.alert(
            "Thông báo!!!",
            `Bạn có muốn xóa ${a_val.text} không ? `,
            [
                {
                    text: "Cancel",
                },
                { 
                    text: "OK", 
                    onPress: () => {
                        const listDataTmp = [...listData];
                        listDataTmp.splice(index,1);
                        
                        setlistData(listDataTmp);
                    }
                }
            ]
        );
    }
    


    return (
        <View style={[{}, styles.flex_1]} >
            <View style={[styles.flex_1, styles.viewCenterTop, {

            }]}  >
                <TextInput placeholder='Nhập ngôn ngữ' style={[styles.txtText, {}]}
                    onChangeText={(text) => { setTxtText(text) }}
                />

                <TouchableOpacity style={[styles.btnAdd, {}]}   ><Text style={[{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }]}
                    onPress={funClickAdd}
                >Add</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex_4, {
                padding: 10,
            }]}  >
                <ScrollView>
                    {
                        listData.map((item, index) => {
                            return <ComponentItem key={index} item={item} funDelItem={() => {funDeleteItem(index)}} />
                        })
                    }
                </ScrollView>
            </View>

            <StatusBar />
        </View>
    )
}

export default ComponentList;