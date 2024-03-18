import {
  Login,
  OverBoard,
  Register,
  ForgetPassword,
  OtpScreen,
  ChangePassword,
} from '../Screens/Authentication';

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

export const AuthNav = [
  {n: 'OverBoard', c: OverBoard},
  {n: 'login', c: Login},
  {n: 'register', c: Register},
  {n: 'ForgetPassword', c: ForgetPassword},
  {n: 'otpScreen', c: OtpScreen},
  {n: 'changePassword', c: ChangePassword},
];
