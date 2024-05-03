import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/font'
import { useNavigation } from '@react-navigation/native'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import GradientBtn from '../../components/Buttons/GradientBtn'

const WaitingRoom = ({ navigation }) => {

  const handleCancel = () => {
    // navigation.navigate('playgame')
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      {/* <StatusBar
        translucent
        backgroundColor={'transparent'}
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#21c8fe', '#33b8fc', '#46a8fb']}
        style={{
          height: StatusBar.currentHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center'
        }}
      /> */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#21c8fe', '#33b8fc', '#46a8fb']}
        style={{
          height: 45,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: Font.font700,
            fontSize: 22
          }}>Waiting Room</Text>

        <TouchableOpacity activeOpacity={0.8} onPress={() => handleCancel()}
        >
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
      </LinearGradient>

      <View style={{ height: 70, backgroundColor: '#91939C' }} ></View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#263076', '#222C5E', '#232B54']}
        style={{
          flex: 1,
          paddingTop: 50,
          paddingHorizontal: 15
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#21c8fe', '#33b8fc', '#46a8fb']}
          style={{
            height: 70,
            flexDirection: 'row',
            overflow: 'hidden',
            borderRadius: 10
          }}
        >
          <View style={{ flex: .2, justifyContent: 'center', alignItems: 'flex-end' }} >
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 100,
                backgroundColor: 'black',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Icon
                size={22}
                name="user"
                color={'#3C86C6'}
                type={IconType.FontAwesome}
              />
            </View>
          </View>
          <View style={{ flex: .5, justifyContent: 'center', paddingLeft: 10 }} >
            <Text style={{ fontFamily: Font.font800, color: 'white', fontSize: 18 }}>Laraib Laraib</Text>
          </View>
          <View style={{ flex: .3, justifyContent: 'center', }} >
            <GradientBtn
              join_tourn title={'Waiting'}
              restyle={{ width: 90, height: 35, borderRadius: 4 }}
             onPress={() => navigation.navigate('playgame')}
            />
          </View>
        </LinearGradient>


      </LinearGradient>

    </SafeAreaView>
  )
}

export default WaitingRoom

const styles = StyleSheet.create({})