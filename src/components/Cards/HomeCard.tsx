import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {HomeCardInterface as hci} from '../../utils/interface';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Sub} from '..';
import {Color} from '../../utils/Color';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
const HomeCard: FC<hci> = ({data, onPress, i, onShare}) => {
  const {title} = data;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.HomeContainer,
        // {backgroundColor: `${data}`, marginTop: i === 0 ? 15 : 0},
      ]}>
      <View style={[style.WhiteBanner, GlobalStyle.Space_Between]}>
        <Sub text="calye" color={Color.Black} style={style.BannerText} />
        <TouchableOpacity onPress={onShare} style={style.ShareIconBox}>
          <Icon
            size={15}
            color={Color.White}
            name="share-2"
            type={IconType.Feather}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={GlobalStyle.full}
        source={{
          uri: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}>
        <Text style={style.HomeCardTitle}>{`${data}`}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeCard;
