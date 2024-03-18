import {Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {HeadingType} from '../../Utils/type';

const Heading: FC<HeadingType> = props => {
  const {text, style, center, marginTop} = props;
  return (
    <Text
      style={[
        styles.Heading,
        style,
        {textAlign: center ? 'center' : 'left', marginTop: marginTop},
      ]}>
      {text}
    </Text>
  );
};

export default Heading;
