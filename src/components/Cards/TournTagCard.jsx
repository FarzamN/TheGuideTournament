import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../../utils/font'

const TournTagCard = (props) => {
    const { second, data } = props
    return (
        <>
            <View style={[styles.circleView, second ? { right: -3,borderColor: '#FAAD18', } : { left: -3,borderColor: '#00F784', }]} >
                <Text style={styles.circleTxt}>
                    Lvl
                </Text>
                <Text style={styles.circleTxt}>
                    {data.level}
                </Text>
            </View>

            <View
                style={{
                    height: 30,
                    width: 120,
                    backgroundColor: second ? '#F58B1C' : '#0DCC74',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    numberOfLines={1}
                    style={[styles.txtSty, second ? { right: 10 } : { left: 10 }]} >
                    {data.name}
                </Text>
            </View>
        </>
    )
}

export default TournTagCard

const styles = StyleSheet.create({
    circleView: {
        position: 'absolute',
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: '#00F784',
        backgroundColor: 'white',
        borderRadius: 100,
        zIndex: 999,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSty: {
        color: 'white',
        fontFamily: Font.font600,
        fontSize: 18,
        textTransform: 'uppercase'
        // left: 10,
    },
    circleTxt: {
        fontFamily: Font.font700,
        color: 'black',
        fontSize: 12
    }
})