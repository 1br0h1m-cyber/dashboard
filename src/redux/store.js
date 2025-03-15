import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './slice/navbar.slice'

export default configureStore({
    reducer: {
        navbar: navbarSlice,
    },
})