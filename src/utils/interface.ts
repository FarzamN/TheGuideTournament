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

export interface HomeSwitchInterface {
  i: number;
  focus: boolean;
  onPress: () => void;
  data: {title: string};
}

export interface HomeCardInterface {
  i: number;
  onPress: () => void;
  data: {title: string};
}
