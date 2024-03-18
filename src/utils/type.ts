import {ReactNode, ReactElement} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Control, FieldValues, RegisterOptions} from 'react-hook-form';

export type CustomButtonProps = {
  onPress?: () => void;
  loader?: boolean;
  style?: ViewStyle;
  disabled?: boolean;
  isMarginTop?: boolean;
  marginTop?: number | 'auto' | `${number}%`;
  title: string;
  textRestyle?: false | ViewStyle | TextStyle;
};

export type BodyProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export type HeadingType = {
  text: string;
  style?: TextStyle;
  center?: boolean;
  marginTop?: number;
  onPress?: () => void;
};

export type MainInputType = {
  Container?: ViewStyle;
  defaultValue?: string;
  name?: string;
  control?: Control<FieldValues>;
  rules?: RegisterOptions;
  onFocus?: () => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  password?: boolean;
  label?: string | ReactElement;
  maxLength?: number | undefined;
  restyle?: TextStyle;
};

export type ValidationType = {
  isError: boolean | object | undefined;
  message: string | object | any;
};
export type ImageType = {
  source: ImageSourcePropType;
  onPress?: () => void;
};

export type ImagePicType = {
  isVisible: boolean;
  onClose: () => void;
  PressPicture: () => void;
  PressCamera: () => void;
};

export type FullImageType = {
  style: ViewStyle;
  source: ImageSourcePropType;
  ImageStyle?: ImageStyle;
  radius?: number;
};

export type loaderType = {
  visible: boolean;
  isError?: boolean;
  message?: string;
};
