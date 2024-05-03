import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../utils/font'
import AbsoluteBtn from '../../components/Buttons/AbsoluteBtn'
import { useNavigation } from '@react-navigation/native'
import MInistryCard from '../../components/Cards/MInistryCard'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MINISTRY_DATA } from '../../redux/reducer/holder'
import RoundLoader from '../../components/Loaders/RoundLoader'

const Ministeries = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const add_ministry_data = useSelector((state) => state.add_ministry_data)

    const [loader, setLoader] = useState(false)

    const handleRemove = (item) => {
        setLoader(true)
        const filterData = add_ministry_data.filter((data) => data.id != item.id)
        setTimeout(() => {
            dispatch({ type: ADD_MINISTRY_DATA, payload: filterData })
            setLoader(false)
            navigation.goBack()
        }, 2000);
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <RoundLoader isVisible={loader} />

            <FlatList
                data={add_ministry_data}
                keyExtractor={(_, ix) => ix.toString()}
                renderItem={({ item }) => {
                    return (
                        <MInistryCard
                            onPress={() => handleRemove(item)}
                            restyle={{ right: 10 }}
                            btnTxt="Remove"
                            data={item}
                        />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View />
                    )
                }}
                ListFooterComponentStyle={{ height: 60 }}
            />
            <AbsoluteBtn title='Add Ministry' onPress={() => navigation.navigate('chooseministry')} />
        </SafeAreaView>
    )
}

export default Ministeries

const styles = StyleSheet.create({})

// const DATA = [
//     {
//         id: 1,
//         name: 'City Bible Tournament',
//         title: 'Start a city bible tournament in Sioux Falls, SD',
//         totalAmount: 200000,
//         spendAmount: 100,
//         uri: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

//     },
// ]