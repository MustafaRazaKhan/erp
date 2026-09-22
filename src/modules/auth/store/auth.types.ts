export type LoginState = {
  isLoading: {
    loading: boolean;
    message: string;
  };

  loginObj: {
    role: string;
    email: string;
    password: string;
  };

  userObj: {
    userName: string;
    emaiL: string;
    photo: File | null;
  };
};
