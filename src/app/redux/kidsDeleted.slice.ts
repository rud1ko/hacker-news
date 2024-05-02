import {createSlice} from "@reduxjs/toolkit";

interface KisdState{
    deleted: boolean[]
}

const initialState: KisdState = {
    deleted: []
}

export const kidsDeletedSlice = createSlice({
    name: 'cartCourses',
    initialState,
    reducers: {
        isDeletedAdd: (state: KisdState, {payload: deleted}) => {
            state.deleted.push(deleted)
        },
        clear: (state: KisdState) => {
            state.deleted = []
        }
    }
})

export const {actions, reducer} = kidsDeletedSlice