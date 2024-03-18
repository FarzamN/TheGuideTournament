import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {FullImageType} from '../../utils/type';

const FullImage: FC<FullImageType> = props => {
  const {style, source, ImageStyle, radius} = props;
  return (
    <View style={style}>
      <Image
        resizeMode="contain"
        source={source}
        style={[GlobalStyle.full, ImageStyle, {borderRadius: radius}]}
      />
    </View>
  );
};

export default FullImage;
