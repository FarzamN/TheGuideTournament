import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/font'

const GradientBtn = (props) => {
    const { join_tourn, title, onPress, mgTop ,restyle} = props
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1DC511', '#0FDC18', '#0FDC18']}
                style={[{
                    height: 40,
                    width: 120,
                    backgroundColor: 'red',
                    marginRight: 10,
                    marginTop: mgTop ? 30 : 0,
                    borderRadius: 8,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center'
                }, restyle]}
            >
                <Text style={{
                    fontFamily: Font.font800,
                    color: 'white',
                    fontSize: 17
                }}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientBtn

const styles = StyleSheet.create({})