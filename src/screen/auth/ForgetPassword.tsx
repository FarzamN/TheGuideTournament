import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {
  Body,
  CustomButton,
  FullImage,
  MainInput,
  Validation,
} from '../../components';
import {nif} from '../../utils/interface';
import {useForm} from 'react-hook-form';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {emailPattern, required} from '../../utils/Constants';
import {useDispatch} from 'react-redux';

const ForgetPassword: FC<nif> = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: object) => {
    console.log(data);
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
        <View style={GlobalStyle.height} />

        <MainInput
          autoFocus
          control={control}
          name="email"
          defaultValue="player9@gmail.com"
          rules={{
            required: required('Email'),
            pattern: emailPattern,
          }}
          placeholder="Email"
          keyboardType={'email-address'}
        />
        <Validation isError={errors?.email} message={errors?.email?.message} />
        <View style={GlobalStyle.height} />
        <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Body>
  );
};

export default ForgetPassword;
