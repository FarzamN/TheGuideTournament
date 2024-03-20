import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {
  Body,
  CustomButton,
  FullImage,
  MainInput,
  Validation,
} from '../../components';
import {useForm} from 'react-hook-form';
import {emailPattern, required} from '../../utils/Constants';
import {nif} from '../../utils/interface';
import {GlobalStyle} from '../../utils/GlobalStyle';
import style from './style';
import {LoginApi} from '../../redux/actions/AuthAction';
import {useDispatch} from 'react-redux';

const Login: FC<nif> = ({navigation}) => {
  const dispatch = useDispatch();
  const [api, setApi] = useState({
    load: false,
    error: false,
    msg: '',
  });
  const onSubmit = (data: object) => {
    dispatch(LoginApi(data, setApi));
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
        <MainInput
          password
          control={control}
          name="password"
          defaultValue="12345678"
          placeholder="Password"
          rules={{
            required: required('Password'),
          }}
        />
        <Validation
          isError={errors?.password}
          message={errors?.password?.message}
        />
        <TouchableOpacity onPress={() => navigation.navigate('forgetPassword')}>
          <Text style={style.forget}>Forget password</Text>
        </TouchableOpacity>

        <CustomButton
          title="Login"
          loader={api.load}
          onPress={handleSubmit(onSubmit)}
        />
        <View style={GlobalStyle.height} />
        <CustomButton
          title="Create a new account"
          style={style.newAccountButton}
          textRestyle={style.newAccountButtonText}
          onPress={() => navigation.navigate('register')}
        />
      </ScrollView>
    </Body>
  );
};

export default Login;
