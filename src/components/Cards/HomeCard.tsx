import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {HomeCardInterface as hci} from '../../utils/interface';

const HomeCard: FC<hci> = ({data}) => {
  const {title} = data;
  return (
    <View>
      <Text>HomeCard</Text>
    </View>
  );
};

export default HomeCard;
