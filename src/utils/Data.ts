import {Login, Register, ForgetPassword} from '../screen/auth';
import {Home} from '../screen/user';

export const AuthArr = [
  {n: 'login', c: Login},
  {n: 'register', c: Register},
  {n: 'forgetPassword', c: ForgetPassword},
];

export const UserArr = [{n: 'home', c: Home}];

export const HomeSwitchData = [
  {title: 'Tournaments', id: 1},
  {title: 'Ministeries', id: 2},
];

export const blue = ['#79b5fc', '#53a0fb', '#3f96fb'];
export const orange = ['#f79e6e', '#f57d3d', '#F58245'];

export const HomeData = ['#79b5fc', '#f79e6e', '#3f96fb'];
