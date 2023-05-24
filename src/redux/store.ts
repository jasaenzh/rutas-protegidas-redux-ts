import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";
import { userSlice } from "./states/user";

export interface AppStore {
    user: UserInfo;
}

// Configurando el store
export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
})