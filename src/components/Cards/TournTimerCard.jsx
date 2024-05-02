import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/font'

const TournTimerCard = (props) => {
    const { text1, text2 } = props
    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0.2 }}
            colors={['#1C4BB3', '#136EC6', '#21c8fe']}
            style={{
                flex: 1,
                margin: 8,
                borderRadius: 4,
                overflow: 'hidden',
            }}
        >

            <View style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 4 }}>
                <Text style={{ color: 'white', fontFamily: Font.font700, fontSize: 16, top: 3 }} >{text1}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 4 }}>
                <Text style={{ color: 'white', fontFamily: Font.font700, fontSize: 16, bottom: 3 }} >{text2}</Text>
            </View>

        </LinearGradient>
    )
}

export default TournTimerCard

const styles = StyleSheet.create({})