import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState:{
        name: "Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",

    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        choseName: (state, action) => { state.name = action.payload },//All we're doing is setting the input to the state.name
        choseEmail: (state, action) => { state.email = action.payload },//All we're doing is setting the input to the state.name
        chosePhone: (state, action) => { state.phone_number = action.payload }, //All we're doing is setting the input to the state.name
        choseAddress: (state, action) => { state.address = action.payload } //All we're doing is setting the input to the state.name


    }
})

export const reducer = rootSlice.reducer;
export const {choseName, choseEmail, chosePhone, choseAddress } = rootSlice.actions