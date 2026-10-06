import { createSlice } from "@reduxjs/toolkit";
import type { IComment } from "../../models/IComments";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAll } from "../../services/api.service";





type CommentSliceType = {
    comments: IComment[]
}

const initCommentSliceState: CommentSliceType = {comments: []}

const loadComments = createAsyncThunk("loadComments", async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>("/comments");
    console.log(comments);
    return thunkAPI.fulfillWithValue(comments);
})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: bilder => bilder.addCase(loadComments.fulfilled, (state: CommentSliceType, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
});

export const commentActions = {...commentSlice.actions, loadComments};