import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { HomeCardInterface as hci } from '../../utils/interface';
import style from './style';
import { GlobalStyle } from '../../utils/GlobalStyle';
import { Sub } from '..';
import { Color } from '../../utils/Color';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Font } from '../../utils/font';
import LinearGradient from 'react-native-linear-gradient';
import GradientBtn from '../Buttons/GradientBtn';
import { useNavigation } from '@react-navigation/native';

const HomeCard = ({ data, onPress, i, onShare }) => {

  const navigation = useNavigation()

  const { title, tourn_time } = data;

  return (
    <View
      // activeOpacity={0.8}
      // onPress={onPress}
      style={[
        style.HomeContainer,
        // {backgroundColor: `${data}`, marginTop: i === 0 ? 15 : 0},
      ]}>

      <View style={[style.WhiteBanner, GlobalStyle.Space_Between]}>
        <Sub text={title} color={Color.Black} style={style.BannerText} />
        <TouchableOpacity activeOpacity={0.7} onPress={onShare} style={style.ShareIconBox}>
          <Icon
            size={15}
            color={Color.White}
            name="share-2"
            type={IconType.Feather}
          />
        </TouchableOpacity>
      </View>

      <ImageBackground
        style={[GlobalStyle.full, {
          // justifyContent: 'space-between',
          alignItems: 'flex-end',

        }]}
        source={{
          uri: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            marginRight: 10,
            marginTop: 15,
            padding: 2
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: Font.font600,
            }}
          >Tournament Starts in:   {`${tourn_time}`}</Text>
        </View>
       
       <GradientBtn 
       mgTop
       join_tourn title={'Join Tournament'} 
       onPress={() => navigation.navigate('waitingroom')}
        />

      </ImageBackground>
    </View>
  );
};

export default HomeCard;
