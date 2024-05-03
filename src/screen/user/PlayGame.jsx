import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, PanResponder, Animated, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Font } from '../../utils/font';
import TournTimerCard from '../../components/Cards/TournTimerCard';
import TournPointCard from '../../components/Cards/TournPointCard';
import QuestOptCard from '../../components/Cards/QuestOptCard';
import TournTagCard from '../../components/Cards/TournTagCard';
import RearrangeGame from '../../components/Game/RearrangeGame';
import CancelHeader from '../../components/Header/CancelHeader';

const PlayGame = ({ navigation }) => {
    const gameType = 'rearrange'

    const [player1Detail, setPlayer1Detail] = useState({
        name: 'laraib',
        level: 11,
        remaining_ans: 10
    })
    const [player2Detail, setPlayer2Detail] = useState({
        name: 'test',
        level: 10,
        remaining_ans: 8
    })

    const handleCancel = () => {
        // navigation.navigate('playgame')
        navigation.goBack()
    }
    const handlePlayer1 = () => {
        const check = player1Detail.remaining_ans - 1

        const newData = {
            ...player1Detail,
            remaining_ans: check
        }

        setPlayer1Detail(newData)
    }
    const handlePlayer2 = () => {
        const check = player2Detail.remaining_ans - 1

        const newData = {
            ...player2Detail,
            remaining_ans: check
        }

        setPlayer2Detail(newData)
    }
    function convertToDecimal(num) {
        if (num == 9) {
            return 0.1
        } else if (num == 8) {
            return 0.2
        } else if (num == 7) {
            return 0.3
        } else if (num == 6) {
            return 0.4
        } else if (num == 5) {
            return 0.5
        } else if (num == 4) {
            return 0.6
        } else if (num == 3) {
            return 0.7
        } else if (num == 2) {
            return 0.8
        } else if (num == 1) {
            return 0.9
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar  backgroundColor={'#0947A8'} barStyle={'light-content'}/>

            <CancelHeader img onPress={() => handleCancel()} title='Family and friends tournament' />

            {/* <View
                style={{
                    height: 70,
                    backgroundColor: '#0947A8',
                    flexDirection: 'row',

                }}
            >
                <View style={{ flex: .2, backgroundColor: 'black' }} ></View>
                <View style={{ flex: .65, justifyContent: 'center', alignItems: 'center' }} >
                    <Text
                        style={{
                            fontFamily: Font.font700,
                            color: 'white',
                            fontSize: 19,
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}
                    >Family and friends tournament</Text>
                </View>
                <View style={{ flex: .15, justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleCancel()} >
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
            </View> */}

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#052B76', '#083B9C', '#052B76', '#052B76']}
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        height: 60,
                        flexDirection: 'row',
                        overflow: 'hidden',
                        borderRadius: 2
                    }}
                >
                    <View style={{ flex: 0.65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: Font.font500, color: '#FBA90B', }}>Question & Answer-</Text>
                        <Text style={{ fontFamily: Font.font500, color: '#0CDEBD', }}> Easy</Text>
                    </View>
                    <View style={{ flex: 0.35, padding: 5 }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'black',
                                flexDirection: 'row'
                            }}
                        >

                            <TournTimerCard text1={'04'} text2={'Min'} />
                            <TournTimerCard text1={'40'} text2={'Sec'} />

                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <View style={{ flex: .14, alignItems: 'center' }}>
                        <TournPointCard
                            hyt={player1Detail.remaining_ans == 10 ? 0 : convertToDecimal(player1Detail.remaining_ans)}
                            bgColor='#0DCC74'
                            data={player1Detail}
                        />
                    </View>
                    <View style={{ flex: .72, }}>
                        <Text
                            style={{
                                fontFamily: Font.font800,
                                color: 'white',
                                fontSize: 17,
                                textAlign: 'center',
                                maxWidth: '95%',
                                textTransform: 'uppercase'
                            }} >
                            Who is believed to have written the first 5 books of the bible?
                        </Text>
                        {
                            gameType == 'rearrange' ?
                                <View style={{ flex: 1, justifyContent: 'center' }} >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0.7, y: 1 }}
                                        colors={['#EF8E42', '#DC8A44', '#B75E2A', '#D27534', '#D27534']}
                                        style={{
                                            height: 60,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#D27534',
                                            padding: 5
                                        }}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 0.7, y: 1 }}
                                            colors={['#571800', '#611B03', '#591800', '#601B03', '#5B1800']}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                justifyContent: 'center',
                                                borderRadius: 4
                                            }}
                                        >
                                            <RearrangeGame arrangeData={reArrangeArr} ansReArrange={ansReArrange} />
                                        </LinearGradient>
                                    </LinearGradient>
                                </View>
                                :
                                <FlatList
                                    data={DATAarr}
                                    renderItem={({ item, indx }) => {
                                        return (
                                            <QuestOptCard title={item.name} />
                                        )
                                    }}
                                    style={{
                                        flexDirection: 'column-reverse'
                                    }}
                                    ListFooterComponent={() => {
                                        return (
                                            <View />
                                        )
                                    }}
                                    ListFooterComponentStyle={{
                                        marginBottom: 40
                                    }}
                                />
                        }

                    </View>
                    <View style={{ flex: .14, alignItems: 'center' }}>
                        <TournPointCard
                            bgColor='#F58B1C'
                            hyt={player2Detail.remaining_ans == 10 ? 0 : convertToDecimal(player2Detail.remaining_ans)}
                            data={player2Detail}
                        />
                    </View>
                </View>
            </LinearGradient>
            <View
                style={{
                    height: 70,
                    backgroundColor: '#0943A4',
                    flexDirection: 'row',
                    paddingHorizontal: 15
                }}>
                <View style={{ flex: 1, justifyContent: 'center', }} >
                    <TournTagCard name='test' data={player1Detail} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                    <TournTagCard second name='laraib' data={player2Detail} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PlayGame

const styles = StyleSheet.create({
})

const DATAarr = [
    { name: 'king david' },
    { name: 'john' },
    { name: 'adam' },
    { name: 'moses' },
]
const reArrangeArr = ['a', 'l', 'a', 'r', 'i', 'b']
const ansReArrange = ['l', 'a', 'r', 'a', 'i', 'b']