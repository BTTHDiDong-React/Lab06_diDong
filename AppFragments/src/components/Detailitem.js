import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from '../themes/styleList';

const Detailitem = ({ route, navigation }) => {

    const { item } = route.params;


    return (
        <View style={[styles.flex_1, {
            backgroundColor: '#FFF9F9',

        }]} >
            <View style={[{
                alignItems: 'center',
                marginTop: 50,
                backgroundColor: '#F8DEDE',
                marginHorizontal: 50,
                paddingVertical: 20,
            }]}  >
                <Image source={item.linkImg} style={[{
                    width: 175,
                    height: 175,
                }]} />
            </View>
            <View style={[{
                marginHorizontal: 50,
                backgroundColor: '#Ff84e8',
                padding: 20
            }]} >
                <Text style={[{
                    alignItems: 'center',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginBottom: 10
                }]} > {item.name} </Text>
                <Text style={[{
                    marginBottom: 10,
                    fontWeight: '500',
                }]} >Tips on fall trends from celeb stylist Dani Michelle.</Text>
                <Text
                    fText style={[{
                        marginBottom: 5,
                        fontWeight: '500',
                    }]} >Discount: {item.discount} %</Text>
                    <Text
                    fText style={[{
                        marginBottom: 5,
                        fontWeight: '500',
                    }]} >Price: {item.discount*2.6} $</Text>
            </View>
        </View>
    )
}

export default Detailitem;