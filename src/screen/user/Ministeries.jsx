import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../../utils/font'

const Ministeries = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TouchableOpacity
            activeOpacity={0.7}
                style={{
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
                }}
            >
                <Text style={{
                    fontFamily: Font.font500,
                    color: '#0FDB18',
                    fontSize: 17
                }}>Add Ministry</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Ministeries

const styles = StyleSheet.create({})