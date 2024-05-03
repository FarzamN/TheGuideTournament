import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../utils/font'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Color } from '../../utils/Color';
import * as Progress from 'react-native-progress';
// import Slider from '@react-native-community/slider';
import Slider from 'react-native-custom-slider'
import { height } from '../../utils/Constants';

const width = Dimensions.get('screen').width

const MInistryCard = ({ data, restyle, onPress, btnTxt }) => {
    const [sliderValue, setSliderValue] = useState(0)

    const onSubmit = (item) => {
        console.log('item', item)
    }

    return (
        <View style={styles.mainView}>

            <View style={styles.mVp1}>
                <View style={{ flex: .25 }} ></View>

                <View style={{ flex: .5, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={styles.nameSty} >
                        {data.name}
                    </Text>
                </View>

                <View style={{ flex: .25, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} >

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.roundBox, { backgroundColor: '#FFB56E', }]}>
                        <Icon
                            size={15}
                            color={Color.White}
                            name="star"
                            type={IconType.AntDesign}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.roundBox, { backgroundColor: '#FF7F7E', }]}>
                        <Icon
                            size={15}
                            color={Color.White}
                            name="share-2"
                            type={IconType.Feather}
                        />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.mVp2}>
                <Image
                    resizeMode='cover'
                    source={{ uri: data.uri }}
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />

                <TouchableOpacity activeOpacity={0.7} style={[styles.btnSty, restyle]} onPress={onPress}>
                    <Text style={styles.BtnTxt}>{btnTxt}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mVp3}>
                <Text style={styles.titleSty}>{data.title}</Text>

                <Slider
                    style={{ width: '100%' ,  height: 12}}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={10}
                    onSlidingComplete={onSubmit}
                    onValueChange={setSliderValue}
                    minimumTrackTintColor="#CFA847"
                    maximumTrackTintColor="#fff"
                    thumbTintColor="#8CE04F"
                    thumbStyle={{
                        height: 0,
                        width: 0,
                        borderRadius: 10,
                    }}
                    trackStyle={{
                        height: 10,
                        borderRadius: 100,
                        backgroundColor: '#D6D6D6'
                    }}
                />


                {/* <Slider
                    style={{ width: '100%',  }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#CFA847"
                    maximumTrackTintColor="#D6D6D6"
                /> */}

                {/* <Progress.Bar
                    progress={0.1}
                    width={width / 1.13}
                    unfilledColor={'#D6D6D6'}
                    borderColor={'#D6D6D6'}
                    color={'#CFA847'}
                    borderRadius={2}
                    height={8}
                    useNativeDriver={true}
                    borderWidth={0}
                    animationType='timing'
                /> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 2 }} >
                    <Text style={styles.amountSty}>$ {data.spendAmount}</Text>
                    <Text style={styles.amountSty}>$ {data.totalAmount}</Text>
                </View>
            </View>

        </View>
    )
}

export default MInistryCard

const styles = StyleSheet.create({
    mainView: {
        height: 200,
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 1,
        marginBottom: 10
    },
    mVp1: {
        flex: .2,
        flexDirection: 'row'
    },
    mVp2: {
        flex: .45,
    },
    mVp3: {
        flex: .35,
        paddingHorizontal: 10
    },
    nameSty: {
        color: '#42A5F5',
        fontFamily: Font.font800,
        fontSize: 20
    },
    roundBox: {
        height: 30,
        width: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleSty: {
        color: 'black',
        fontFamily: Font.font600,
        fontSize: 16,
        marginVertical: 10
    },
    amountSty: {
        color: 'black',
        fontFamily: Font.font600,
        fontSize: 12,
    },
    btnSty: {
        height: 25,
        width: 85,
        backgroundColor: '#FFAA05',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BtnTxt: {
        color: '#725450',
        fontFamily: Font.font600,
        fontSize: 17
    },
})