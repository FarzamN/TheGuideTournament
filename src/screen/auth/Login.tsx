import {ScrollView} from 'react-native';
import React, {FC} from 'react';
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

const Login: FC<nif> = ({navigation}) => {
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
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <FullImage
          style={style.ImageBox}
          source={require('../../assets/Image/logo.png')}
        />
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
          defaultValue="player9@gmail.com"
          placeholder="Password"
          rules={{
            required: required('Password'),
          }}
        />
        <Validation
          isError={errors?.password}
          message={errors?.password?.message}
        />
        <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Body>
  );
};

export default Login;
