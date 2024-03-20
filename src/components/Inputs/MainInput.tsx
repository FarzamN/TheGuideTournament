import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {FC, forwardRef, useState, Ref} from 'react';
import style from './style';
import {
  useController,
  Control,
  FieldValues,
  FieldPath,
  RegisterOptions,
} from 'react-hook-form';
import {MainInputType} from '../../Utils/type';
import {Color} from '../../utils/Color';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {GlobalStyle} from '../../utils/GlobalStyle';

const MainInput: FC<MainInputType> = forwardRef(
  (props, ref: Ref<TextInput>) => {
    const {
      control,
      defaultValue,
      name,
      rules,
      onFocus,
      multiline,
      placeholder,
      keyboardType,
      password,
      maxLength,
      autoFocus,
    } = props;

    const [show, setShow] = useState<boolean>(true);

    const {field} = useController({
      control: control as Control<FieldValues>,
      name: name as FieldPath<FieldValues>,
      rules: rules as RegisterOptions,
      defaultValue: defaultValue || '',
    });

    return (
      <View style={[style.MainInputBox, GlobalStyle.row]}>
        <TextInput
          autoFocus={autoFocus}
          ref={ref}
          value={field.value}
          onFocus={onFocus}
          onChangeText={field.onChange}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={Color.placeholderTextColor}
          style={[
            style.InputStyles,
            {
              width: password ? '93%' : '99%',
            },
          ]}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={password ? show : false}
        />
        {password && (
          <TouchableOpacity onPress={() => setShow(pre => !pre)}>
            <Icon
              type={IconType.Entypo}
              size={20}
              color={Color.Black}
              name={show ? 'eye' : 'eye-with-line'}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
{
  /* {isError && <Validation isError message={message} />} */
}

export default MainInput;
