import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../../utils/font'

const AbsoluteBtn = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.7}
            style={styles.mainView}
        >
            <Text style={styles.txtSty}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default AbsoluteBtn

const styles = StyleSheet.create({
    mainView: {
        height: 45,
        width: 140,
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        borderRadius: 9,
        borderWidth: 1.3,
        borderColor: '#0FDB18',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSty: {
        fontFamily: Font.font500,
        color: '#0FDB18',
        fontSize: 17
    }
})