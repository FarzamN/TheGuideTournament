import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/font'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';

const CancelHeader = (props) => {
    return (
        <View
            style={{
                height: 70,
                backgroundColor: props.backgroundColor ? props.backgroundColor : '#0947A8',
                flexDirection: 'row',

            }}
        >
            {
                props.img ?
                    <View style={{ flex: .2, backgroundColor: 'black' }} ></View>
                    :
                    <View style={{ flex: .2 }} ></View>

            }
            <View style={{ flex: .65, justifyContent: 'center', alignItems: 'center' }} >
                <Text
                    style={{
                        fontFamily: Font.font700,
                        color: 'white',
                        fontSize: 19,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >{props.title}</Text>
            </View>
            <View style={{ flex: .15, justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={props.onPress}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1.7 }}
                        colors={['#F99C9E', '#BD3410', '#BD3410']}
                        style={{
                            height: 30,
                            width: 30,
                            elevation: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 3
                        }}
                    >
                        <Icon
                            size={25}
                            name="cross"
                            color={'white'}
                            type={IconType.Entypo}
                        />
                    </LinearGradient>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CancelHeader

const styles = StyleSheet.create({})