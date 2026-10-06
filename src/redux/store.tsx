import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from  './slices/UserSlice'
import { postSlice } from './slices/PostSlice'
import { commentSlice } from './slices/CommentSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    },
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()