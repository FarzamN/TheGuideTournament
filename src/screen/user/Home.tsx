import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Body, FullImage, MainHeader} from '../../components';
import style from './style';

const Home: FC = () => {
  const nameHere = 'Name will be here';
  return (
    <Body whiteBar blue>
      <MainHeader title={nameHere} />
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/Image/logo.png')}
      />
    </Body>
  );
};

export default Home;
