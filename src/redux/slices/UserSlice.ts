import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../services/api.service";





type UserSliceType = {
    users: IUser[]
}

const initUserSliceState: UserSliceType = {users: []}

// Тут при не обходимости можнол сделать обработку ошибок, например через try/catch
const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await getAll<IUser[]>("/users");
    return thunkAPI.fulfillWithValue(users);
});


export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: bilder => bilder.addCase(loadUsers.fulfilled, (state: UserSliceType, action) => {
        state.users = action.payload;
    })
});

export const userActions = {...userSlice.actions, loadUsers};