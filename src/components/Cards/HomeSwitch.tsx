import React, {FC} from 'react';
import style from './style';
import {Sub} from '..';
import {TouchableOpacity} from 'react-native';
import {HomeSwitchInterface as hsi} from '../../utils/interface';
import LinearGradient from 'react-native-linear-gradient';
import {blue, orange} from '../../utils/Data';

const HomeSwitch: FC<hsi> = ({data, focus, onPress, i}) => {
  const {title} = data;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        width: '45%',
        marginRight: i == 0 ? 5 : 0,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.4, y: 1.25}}
        colors={focus ? orange : blue}
        style={style.HomeContainer}>
        <Sub text={title} center onPress={onPress} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeSwitch;
