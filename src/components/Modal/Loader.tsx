import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {loaderType} from '../../Utils/type';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {styles} from './style';

const Loader: FC<loaderType> = props => {
  const {visible, isError, message} = props;
  return (
    <Modal animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={visible}>
      <View
        style={[
          styles.ModalContainer,
          {backgroundColor: '#FCFCFC', borderWidth: 0.8},
        ]}>
        <LottieView
          autoPlay
          style={styles.LottieView}
          source={
            isError
              ? require('../../assets/lottie/error.json')
              : require('../../assets/lottie/loader.json')
          }
        />
        <Text style={styles.ModalText}>
          {isError ? message : 'Please Wait...'}
        </Text>
      </View>
    </Modal>
  );
};

export default Loader;
