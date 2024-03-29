import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';
import {FullImage} from '..';
import {MainHeaderType} from '../../utils/type';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from '../../redux/reducer/holder';
import {logout} from '../../redux/actions/AuthAction';

const MainHeader: FC<MainHeaderType> = props => {
  const {title} = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={style.container}>
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/Image/logo.png')}
      />
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Text style={style.logout}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
