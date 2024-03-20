import {Text, ActivityIndicator, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {CustomButtonProps} from '../../utils/type';
import {Color} from '../../utils/Color';

const CustomButton: FC<CustomButtonProps> = props => {
  const {onPress, loader, style, disabled, title, textRestyle} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.containerStyle,
        GlobalStyle.row,
        {
          transform: [{scale: loader ? 0.95 : 1}],
          backgroundColor: loader ? Color.Grey : Color.Blue,
        },
        style,
      ]}>
      <View style={GlobalStyle.row}>
        {loader && (
          <ActivityIndicator
            size={20}
            color={Color.Black}
            style={{marginRight: 10}}
          />
        )}

        <Text
          style={[
            styles.title,
            {color: loader ? Color.Black : Color.White},
            textRestyle,
          ]}>
          {loader ? 'Loading...' : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
{
  /*  */
}

export default CustomButton;
