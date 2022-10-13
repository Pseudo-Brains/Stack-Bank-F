import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bankReducer from "../features/bank/bankslice";
import sendred from "../features/send/sendslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: bankReducer,
    send: sendred,
  },
});
