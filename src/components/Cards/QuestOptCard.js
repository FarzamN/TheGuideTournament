import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/font'

const QuestOptCard = (props) => {
    const {title} = props
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#21c8fe', '#33b8fc', '#46a8fb']}
            style={{
                height: 55,
                justifyContent: 'center',
                paddingHorizontal: 15,
                alignItems: 'center',
                borderRadius: 15,
                marginBottom: 10,
                marginHorizontal: 25
            }}
        >
            <Text
                style={{
                    fontFamily: Font.font800,
                    color: 'white',
                    fontSize: 17,
                    textTransform: 'uppercase'
                }} >
               {title}
            </Text>
        </LinearGradient>
    )
}

export default QuestOptCard

const styles = StyleSheet.create({})