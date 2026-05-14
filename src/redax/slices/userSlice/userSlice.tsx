import { createSlice, createAsyncThunk, isFulfilled, isRejected } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../../model/IUser.ts';

type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    loadState: boolean
}

const initialState: UserSliceType = {
    users: [],
    user: null,
    loadState: false
}


export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(users)
        } catch {
            return thunkAPI.rejectWithValue('error')
        }
    }
)

export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(user)
        } catch {
            return thunkAPI.rejectWithValue('error')
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoadState(state, action: PayloadAction<boolean>) {
            state.loadState = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })

            .addMatcher(isFulfilled(loadUsers, loadUser), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadUsers, loadUser), (state) => {
                console.log(state)
            })
    },
});

export const userSlicsActions = {
    ...userSlice.actions,
    loadUsers, 
    loadUser
}

export default userSlice