import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        toggle: false,
        profile: false,
        translate: false,
        theme: false
    },
    reducers: {
        navbarToggle: (state, action) => {
            state.toggle = action.payload
        },
        profileToggle: (state, action) => {
            state.profile = action.payload
        },
        translateToggle: (state, action) => {
            state.translate = action.payload
        },        
        themeToggle: (state, action) => {
            state.theme = action.payload
        },
    },
})

export const { navbarToggle, profileToggle, themeToggle, translateToggle } = navbarSlice.actions

export default navbarSlice.reducer