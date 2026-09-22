import { configureStore } from "@reduxjs/toolkit";

// -----------------------------------------
// MODULE REDUCERS
// -----------------------------------------

import authReducer from "@/modules/auth/store/auth.slice";
import enquiryReducer from "@/modules/enquiry/store/enquiry.slice";
import themeReducer from "@/modules/theme/store/theme.slice";
import toggleReducer from "@/modules/toggle/store/toggle.slice";
import classReducer from "@/modules/class/store/class.slice";
import feeReducer from "@/modules/fee/store/fee.slice";
import schoolReducer from "@/modules/school/store/school.slice";
import userReducer from "@/modules/user/store/user.slice";

// -----------------------------------------
// REDUX STORE
// -----------------------------------------

export const store = configureStore({
  reducer: {
    auth: authReducer,
    enquiry: enquiryReducer,
    theme: themeReducer,
    toggle: toggleReducer,
    class: classReducer,
    fee: feeReducer,
    school: schoolReducer,
    user: userReducer,
  },
});

// -----------------------------------------
// TYPES
// -----------------------------------------

// export type RootState = ReturnType<
//   typeof store.getState
// >;

// export type AppDispatch = typeof store.dispatch;
