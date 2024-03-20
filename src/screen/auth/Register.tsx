import React, {FC, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {nif} from '../../utils/interface';
import {
  Body,
  CustomButton,
  FullImage,
  MainInput,
  Validation,
} from '../../components';
import {useForm} from 'react-hook-form';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {emailPattern, required} from '../../utils/Constants';
import {useDispatch} from 'react-redux';
import {RegisterApi} from '../../redux/actions/AuthAction';

const Register: FC<nif> = ({navigation}) => {
  const dispatch = useDispatch();
  const [api, setApi] = useState({
    load: false,
    error: false,
    msg: '',
  });

  const onSubmit = (data: object) => {
    dispatch(RegisterApi(data, setApi));
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <Body>
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/Image/logo.png')}
      />
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <MainInput
          control={control}
          name="f_name"
          rules={{
            required: required('First Name'),
          }}
          placeholder="First Name"
        />
        <Validation
          message={errors?.f_name?.message}
          isError={errors?.f_name}
        />
        <MainInput
          control={control}
          name="l_name"
          rules={{
            required: required('Last Name'),
          }}
          placeholder="Last Name"
        />
        <Validation
          isError={errors?.l_name}
          message={errors?.l_name?.message}
        />
        <MainInput
          control={control}
          name="email"
          rules={{
            required: required('Email'),
            pattern: emailPattern,
          }}
          placeholder="Email"
          keyboardType={'email-address'}
        />
        <Validation message={errors?.email?.message} isError={errors?.email} />
        <MainInput
          password
          control={control}
          name="password"
          rules={{
            required: required('Password'),
          }}
          placeholder="Password"
        />
        <Validation
          message={errors?.password?.message}
          isError={errors?.password}
        />
        <MainInput
          password
          control={control}
          name="c_password"
          rules={{
            required: required('Confirm Password'),
          }}
          placeholder="Confirm Password"
        />
        <Validation
          message={errors?.c_password?.message}
          isError={errors?.c_password}
        />
        <CustomButton
          title="Finish"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 20}}
          loader={api.load}
        />
        <View style={GlobalStyle.Vertical_Space} />
        <CustomButton
          title="Alrady have an account"
          onPress={() => navigation.navigate('login')}
          style={style.newAccountButton}
          textRestyle={style.newAccountButtonText}
        />
      </ScrollView>
    </Body>
  );
};

export default Register;
