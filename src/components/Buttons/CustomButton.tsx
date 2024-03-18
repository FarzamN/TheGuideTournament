import {Text, ActivityIndicator, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {CustomButtonProps} from '../../utils/type';
import AwesomeButton from 'react-native-really-awesome-button';
import {Color} from '../../utils/Color';
import {width} from '../../utils/Constants';

const CustomButton: FC<CustomButtonProps> = props => {
  const {
    onPress,
    loader,
    style,
    disabled,
    title,
    marginTop,
    isMarginTop,
    textRestyle,
  } = props;
  const back = loader ? Color.Grey : Color.Blue;

  return (
    <AwesomeButton
      raiseLevel={5}
      onPress={onPress}
      disabled={disabled ? disabled : loader}
      borderRadius={20}
      height={55}
      backgroundDarker={back}
      backgroundColor={back}
      width={width - 30}
      style={[
        styles.containerStyle,
        {marginTop: isMarginTop ? marginTop : 12},
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
    </AwesomeButton>
  );
};

export default CustomButton;
