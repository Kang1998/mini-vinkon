declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
    [key: string]: any;
  };
};

declare const rem: {
  px2rem: any;
};

declare const qq: {
  maps: {
    Geolocation: () => void;
  };
};

declare namespace Taro {
  function setStorageItem(key: string, value: any): any;
  function getStorageItem(key: string): any;
}

declare const wx: {
  getUserProfile?: () => void;
  hideAllNonBaseMenuItem: () => void;
  showAllNonBaseMenuItem: () => void;
  showMenuItems: (opts: { menuList: string[] }) => void;
  hideMenuItems: (opts: { menuList: string[] }) => void;
  chooseWXPay: (T) => void;
  openLocation: (T) => void;
  onMenuShareAppMessage: (T) => void;
  onMenuShareTimeline: (T) => void;
  getExtConfigSync?: any;
  config: (T) => void;
  error: (T) => void;
  ready: (fn: () => void) => void;
};

interface ResponseData {
  status: "success" | "error" | "auth";
  data: any;
  code?: number;
  message?: string;
  _?: boolean;
}

type OptionalPartial<T, K extends keyof T> = Omit<T, K> &
  {
    [P in K]?: T[P];
  };

declare const CI_COMMIT_REF_NAME: undefined | "develop" | "master";
