export type UserObj = {
  role: string;
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type ProfileObj = {
  name: string;
  phone: string;
  address: string;
  // add your existing profile fields here
};

export type UserState = {
  loading: boolean;

  userObj: UserObj;

  profileObj: ProfileObj;

  userList: any[];
};
