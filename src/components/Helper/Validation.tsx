import {Text} from 'react-native';
import React, {FC} from 'react';
import {ValidationType} from '../../Utils/type';
import {style} from './style';

const Validation: FC<ValidationType> = props => {
  const {isError, message} = props;

  return <>{isError && <Text style={style.helperText}>{message}</Text>}</>;
};

export default Validation;
