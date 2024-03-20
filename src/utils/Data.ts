import {Login, Register, ForgetPassword} from '../screen/auth';
import {Home} from '../screen/user';

export const AuthArr = [
  {n: 'login', c: Login},
  {n: 'register', c: Register},
  {n: 'forgetPassword', c: ForgetPassword},
];

export const UserArr = [{n: 'home', c: Home}];

export const OverboardButton = [
  {title: 'Get Started', path: 'register', reverse: true},
  {title: 'I already have an account', path: 'login', reverse: false},
];

export const LoginInput = [
  {icon: 'email', p: 'Email', name: 'email'},
  {icon: 'form-textbox-password', p: 'Password', name: 'password'},
];
export const ChangePasswordInput = [
  {p: 'Password', name: 'password'},
  {p: 'Confirm Password', name: 'c_password'},
];

export const RegisterInput = [
  {icon: 'account', p: 'Full Name', name: 'name'},
  {icon: 'email', p: 'Email', name: 'email'},
  {icon: 'phone', p: 'Phone Number', name: 'number'},
  {
    icon: 'form-textbox-password',
    p: 'Password',
    name: 'password',
    pw: true,
  },
  {
    icon: 'form-textbox-password',
    p: 'Confirm Password',
    name: 'c_password',
    pw: true,
  },
];
