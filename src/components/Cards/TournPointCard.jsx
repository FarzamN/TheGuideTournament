import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../../utils/font'

const TournPointCard = (props) => {
    const { bgColor, hyt,data } = props


    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: bgColor,
                    padding: 5
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1.3,
                    borderColor: 'white',
                    borderRadius: 100,

                }}>
                    <Text style={{ fontFamily: Font.font800, color: 'white', fontSize: 20 }} >{data.remaining_ans}</Text>
                </View>
            </View>

            <View
                style={{
                    height: '85%',
                    width: 12,
                    borderWidth: 1,
                    borderColor: '#317EE7',
                    alignSelf: 'center',
                    marginVertical: 15,
                    borderRadius: 35,
                    backgroundColor: '#052A72',
                    flexDirection: 'column-reverse',
                    overflow: 'hidden',
                    padding: 2
                }}
            >
                <View style={{
                    backgroundColor: bgColor,
                    flex: hyt ? hyt : 0,
                    borderRadius: 50,
                }} />
            </View>
        </View>
    )
}

export default TournPointCard

const styles = StyleSheet.create({})