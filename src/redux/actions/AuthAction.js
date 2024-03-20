import {Base_Url} from '../../utils/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {USER_DETAILS} from '../reducer/holder';

export const LoginApi = (data, setFun) => {
  return async dispatch => {
    try {
      setFun({load: true});
      const url = `${Base_Url}login`;
      const myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const responseData = await response.json();
      if (responseData.success == true) {
        await AsyncStorage.setItem('user_details', 'true');
        dispatch({type: USER_DETAILS, payload: true});
        setFun({load: false});
      } else {
        setFun({load: false});
        setFun({msg: responseData.message});
        setFun({error: true});
        setTimeout(() => {
          setFun({error: false});
        }, 2000);
      }
    } catch (error) {
      setFun({load: false});
      Toast.show('Server side error');
      console.log('error LoginApi', error);
    }
  };
};

export const RegisterApi = (data, setFun) => {
  return async dispatch => {
    try {
      setFun({load: true});
      const url = `${Base_Url}register`;
      const myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);
      myData.append('password_confirm', data.c_password);
      myData.append('email_check', 1);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const responseData = await response.json();
      if (responseData.success == true) {
        await AsyncStorage.setItem('user_details', 'true');
        dispatch({type: USER_DETAILS, payload: true});
        setFun({load: false});
      } else {
        setFun({load: false});
        setFun({msg: responseData.message});
        setFun({error: true});
        setTimeout(() => {
          setFun({error: false});
        }, 2000);
      }
    } catch (error) {
      setFun({load: false});
      console.log('error RegisterApi', error);
      Toast.show('Server side error');
    }
  };
};
