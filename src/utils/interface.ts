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

export interface nif {
  navigation: Navigation;
  route: any;
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
