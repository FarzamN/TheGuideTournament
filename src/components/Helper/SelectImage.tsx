import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {ImageType} from '../../utils/type';
import {Color} from '../../utils/Color';

const SelectImage: FC<ImageType> = props => {
  const {onPress, source} = props;
  return (
    <View style={style.ImageContainer}>
      <Image
        resizeMode="contain"
        style={[GlobalStyle.full, {borderRadius: 100}]}
        source={source}
      />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={style.IconBox}>
        <Icon
          size={16}
          name="camera"
          type={IconType.Entypo}
          color={Color.Yellow}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectImage;
