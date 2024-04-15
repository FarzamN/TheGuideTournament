import {View, Text, FlatList} from 'react-native';
import React, {FC, useState} from 'react';
import {
  Body,
  FullImage,
  HomeCard,
  HomeSwitch,
  MainHeader,
} from '../../components';
import style from './style';
import {HomeData, HomeSwitchData} from '../../utils/Data';
import {GlobalStyle} from '../../utils/GlobalStyle';

const Home: FC = () => {
  const nameHere = 'Name will be here';
  const [select, setSelect] = useState<number>(1);
  return (
    <Body whiteBar blue>
      <MainHeader title={nameHere} />
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/Image/logo.png')}
      />
      <View style={GlobalStyle.MapContainer}>
        {HomeSwitchData.map((item, index) => (
          <HomeSwitch
            i={index}
            data={item}
            key={item.id.toString()}
            focus={select === item.id}
            onPress={() => setSelect(item.id)}
          />
        ))}
      </View>

      <FlatList
        data={HomeData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, ix) => ix.toString()}
        renderItem={({item, index}) => <HomeCard data={item} i={index} />}
      />
    </Body>
  );
};

export default Home;
