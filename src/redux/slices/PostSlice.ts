import { createSlice } from "@reduxjs/toolkit";
import type { IPost } from "../../models/IPost";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAll } from "../../services/api.service";




type PostSliceType = {
    posts: IPost[]
}

const initPostSliceState: PostSliceType = {posts: []}

const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI) => {
    const posts = await getAll<IPost[]>("/posts");
    console.log(posts);
    return thunkAPI.fulfillWithValue(posts);
});

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: bilder => bilder.addCase(loadPosts.fulfilled, (state: PostSliceType, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    })
});

export const postActions = {...postSlice.actions, loadPosts};