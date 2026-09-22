import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingState = {
  loading: boolean;
  message: string;
};

type LoginObj = {
  role: string;
  email: string;
  password: string;
};

type UserObj = {
  userName: string;
  emaiL: string;
  photo: string | null;
};

type AuthState = {
  isLoading: LoadingState;
  loginObj: LoginObj;
  userObj: UserObj;
};

const initialState: AuthState = {
  isLoading: {
    loading: false,
    message: "",
  },

  loginObj: {
    role: "",
    email: "",
    password: "",
  },

  userObj: {
    userName: "",
    emaiL: "",
    photo: null,
  },
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    handleLoginChange: (
      state,
      action: PayloadAction<{
        name: keyof LoginObj;
        value: string;
      }>,
    ) => {
      state.loginObj[action.payload.name] = action.payload.value;
    },

    setLoading: (
      state,
      action: PayloadAction<{
        loading: boolean;
        message: string;
      }>,
    ) => {
      state.isLoading = action.payload;
    },

    setSuccess: (
      state,
      action: PayloadAction<{
        loading: boolean;
        message: string;
      }>,
    ) => {
      state.isLoading = action.payload;
    },

    setUser: (state, action: PayloadAction<UserObj>) => {
      state.userObj = action.payload;
    },

    resetLogin: (state) => {
      state.loginObj = {
        role: "",
        email: "",
        password: "",
      };

      state.isLoading = {
        loading: false,
        message: "",
      };
    },
  },
});

export const {
  handleLoginChange,
  setLoading,
  setSuccess,
  setUser,
  resetLogin,
} = authSlice.actions;

export default authSlice.reducer;
