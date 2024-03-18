export interface Navigation {
  navigate: (routeName: string, params?: object) => void;
  goBack?: () => void;
}

export interface Route {
  key?: string;
  name?: string;
  params?: object;
  data?: object;
}

export interface navigationInterface {
  navigation: Navigation;
  route: any;
}

export interface KeyboardProps {
  onPressKey: (value: string) => void;
  onDelete: () => void;
  onDone: () => void;
  visible?: boolean;
}

export interface AuthInterface {
  userData: any | null;
  newData: any | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
export interface LoginForm {
  email: string;
  password: string;
}
