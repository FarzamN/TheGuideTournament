import {Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

import Modal from 'react-native-modal';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {ImagePicType} from '../../Utils/type';
import {styles} from './style';
import {Color} from '../../utils/Color';

const ImagePickerModal: FC<ImagePicType> = props => {
  const {isVisible, onClose, PressPicture, PressCamera} = props;
  return (
    <Modal
      testID={'modal'}
      backdropOpacity={0.3}
      onBackdropPress={onClose}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      statusBarTranslucent
      style={styles.ModalBotton}>
      <View style={styles.PickerContainer}>
        <TouchableOpacity onPress={onClose} style={styles.CrossBOx}>
          <Icon
            type={IconType.Entypo}
            name="cross"
            size={25}
            color={Color.White}
          />
        </TouchableOpacity>

        <View style={styles.SecCon}>
          <TouchableOpacity onPress={PressPicture} style={styles.ModalBtn}>
            <Icon
              type={IconType.MaterialIcons}
              name="photo"
              size={32}
              color={Color.White}
            />
            <Text style={styles.Text1}>Upload picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={PressCamera} style={styles.ModalBtn}>
            <Icon
              type={IconType.Entypo}
              name="camera"
              size={30}
              color={Color.White}
            />
            <Text style={styles.Text1}>Take a picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
