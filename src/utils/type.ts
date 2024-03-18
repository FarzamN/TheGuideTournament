import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Control, FieldValues, RegisterOptions} from 'react-hook-form';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';

export type CustomButtonProps = {
  onPress?: () => void;
  loader?: boolean;
  style?: ViewStyle;
  disabled?: boolean;
  white?: boolean;
  to?: boolean;
  icon?: boolean;
  isMarginTop?: boolean;
  Google?: boolean;
  marginTop?: number | 'auto' | `${number}%`;
  round?: boolean;
  small?: boolean;
  title: string;
  name?: any;
  type?: any;
  color?: string;
  textRestyle?: false | ViewStyle | TextStyle;
};

export type BodyProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export type ImageBackgroundType = {
  children: ReactNode;
  // source: ImageSourcePropType;
  between?: boolean;
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
  multiline?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  password?: boolean;
  label?: TextInputLabelProp;
  maxLength?: number | undefined;
  restyle?: TextStyle;
  icon?: any;
  isIcon?: boolean;
  isError?: boolean | object;
  message?: string | object | any;
  outlined?: boolean;
};

export type ValidationType = {
  isError: boolean | object;
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

export type AuthBodyType = {
  heading: string;
  sub: string;
  title?: string | object;
  children: ReactNode;
  onPress?: () => void;
  noButton?: boolean;
};

export type loaderType = {
  visible: boolean;
  isError?: boolean;
  message?: string;
};
