import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {HeadingType} from '../../Utils/type';

const Sub = props => {
  const {text, style, center, marginTop, onPress, color} = props;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Text
        style={[
          styles.Sub,
          {
            color: color,
            textAlign: center ? 'center' : 'left',
            marginTop: marginTop,
          },
          style,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Sub;
