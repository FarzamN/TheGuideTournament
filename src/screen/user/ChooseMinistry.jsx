import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CancelHeader from '../../components/Header/CancelHeader'
import MInistryCard from '../../components/Cards/MInistryCard'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MINISTRY_DATA } from '../../redux/reducer/holder'
import RoundLoader from '../../components/Loaders/RoundLoader'

const ChooseMinistry = ({ navigation }) => {
    const dispatch = useDispatch()
    const add_ministry_data = useSelector((state) => state.add_ministry_data)

    const [loader, setLoader] = useState(false)

    const handleChoose = (item) => {
        setLoader(true)
        dispatch({ type: ADD_MINISTRY_DATA, payload: [...add_ministry_data, item] })
        setTimeout(() => {
            setLoader(false)
            navigation.goBack()
        }, 2000);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#145DDB' }}>
            <RoundLoader isVisible={loader} />
            <CancelHeader
                backgroundColor='#145DDB'
                onPress={() => navigation.goBack()}
                title='Choose Ministry'
            />
            <FlatList
                data={DATA}
                keyExtractor={(_, ix) => ix.toString()}
                renderItem={({ item }) => {
                    return (
                        <MInistryCard
                            onPress={() => handleChoose(item)}
                            btnTxt="Select"
                            data={item}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default ChooseMinistry

const styles = StyleSheet.create({})

const DATA = [
    {
        id: 1,
        name: 'City Bible Tournament',
        title: 'Start a city bible tournament in Sioux Falls, SD',
        totalAmount: 200000,
        spendAmount: 100,
        uri: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        id: 2,
        name: 'Lifelight Sioux Falls, SD',
        title: 'Help Fund 2024 Sioux Falls lifelight festival!',
        totalAmount: 200000,
        spendAmount: 0,
        uri: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
]