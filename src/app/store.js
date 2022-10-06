import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bankReducer from "../features/bank/bankslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: bankReducer,
  },
});
