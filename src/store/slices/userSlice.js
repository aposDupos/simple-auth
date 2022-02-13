import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {isEmpty} from "../../utils/api";

export const BASE_URL = 'http://localhost:3001/users'

const initialState = {
    email: null,
    password: null,
    isAuth: false,
    status: {
        type: null,
        text: null
    }
}

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async ({email, password}, thunkAPI) => {
        try {
            const response = await fetch(`${BASE_URL}?email=${email}&password=${password}`)
            const data = await response.json()
            if (isEmpty(data)) {
                throw new Error('There is no such user')
            }
            thunkAPI.dispatch(setUser({email, password, isAuth: true}))
            thunkAPI.dispatch(setStatus({type: 'success', text: 'You are logged in!'}))
        } catch (e) {
            thunkAPI.dispatch(setStatus({type: 'error', text: e.message}))
        }
    }
)

export const userRegister = createAsyncThunk(
    'user/userRegister',
    async (data, thunkAPI) => {
        try {
            //Check if email already exists
            const checkResponse = await fetch(`${BASE_URL}?email=${data.email}`)
            const checkData = await checkResponse.json()
            if (!isEmpty(checkData)) {
                throw new Error('This email already exists')
            }
            //Register new user
            await fetch(
                `http://localhost:3001/users`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            thunkAPI.dispatch(setUser(data))
            thunkAPI.dispatch(setStatus({type: 'info', text: 'You are successfully registered'}))
        } catch (e) {
            thunkAPI.dispatch(setStatus({type: 'error', text: e.message}))
        }
    }
)

export const changePassword = createAsyncThunk(
    'user/changePassword',
    async (data, thunkAPI) => {
        try {
            const {user: {email}} = thunkAPI.getState()
            const url = `${BASE_URL}?email=${email}&password=${data.oldPassword}`
            const userResponse = await fetch(url)
            const users = await userResponse.json()
            if (isEmpty(users)) {
                throw new Error('Old password is not correct')
            }
            const response = await fetch(`${BASE_URL}/${users[0].id}`, {
                method: 'PUT',
                body: JSON.stringify({email, password: data.password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const newData = await response.json()
            thunkAPI.dispatch(removeUser())
            thunkAPI.dispatch(setStatus({type: 'success', text: 'You changed your password!'}))
        } catch (e) {
            thunkAPI.dispatch(setStatus({type: 'error', text: e.message}))
        }

    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.password = action.payload.password
            state.isAuth = action.payload.isAuth
        },
        removeUser(state) {
            state.email = null
            state.password = null
            state.isAuth = false
        },
        setStatus(state, action) {
            state.status.type = action.payload.type
            state.status.text = action.payload.text
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(userLogin.fulfilled, (state, action) => {
        //     state.isAuth = !!action.payload?.[0].email
        // })
        // builder.addCase(userRegister.fulfilled, (state, action)=>{
        //
        // })
    }
})
export const {setUser, removeUser, setStatus} = userSlice.actions
export default userSlice.reducer