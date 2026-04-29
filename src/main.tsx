import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";
import type { IUser } from './model/IUser.ts';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import type { ReternType } from '@reduxjs/toolkit';

type UserSliceType = {
    users: IUser[]
}

const initialState: UserSliceType = {
    users: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
        // postSlice: postSlice.reducer
    }
});

export const userSlicsActions = {
    ...userSlice.actions
}

export const useAppSelector = useSelector.withTypes<ReternType<typeof store.getState>>()

createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<RouterProvider router={routes}/>
</Provider>
)
