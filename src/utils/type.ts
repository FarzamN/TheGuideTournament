import {ReactNode, ReactElement} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Control, FieldValues, RegisterOptions} from 'react-hook-form';

export type CustomButtonProps = {
  onPress?: () => void;
  loader?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  title: string;
  textRestyle?: false | ViewStyle | TextStyle;
};

export type BodyProps = {
  children: ReactNode;
  style?: ViewStyle;
  whiteBar?: boolean;
  blue?: boolean;
};

export type HeadingType = {
  text: string;
  style?: TextStyle;
  center?: boolean;
  marginTop?: number;
  onPress?: () => void;
  color: string;
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
  multiline?: boolean | undefined;
  autoFocus?: boolean | undefined;
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

export type IndicatorType = {
  visible: boolean;
  isError?: boolean;
  message?: string;
};

export type MainHeaderType = {
  title: string;
};
