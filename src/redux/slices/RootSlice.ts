import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState:{
        title: "Title",
        author: "Author",
        isbn: "isbn",
        genre: "Genre",

    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        title: (state, action) => { state.title = action.payload },//All we're doing is setting the input to the state.name
        author: (state, action) => { state.author = action.payload },//All we're doing is setting the input to the state.name
        isbn: (state, action) => { state.isbn = action.payload }, //All we're doing is setting the input to the state.name
        genre: (state, action) => { state.genre = action.payload } //All we're doing is setting the input to the state.name


    }
})

export const reducer = rootSlice.reducer;
export const {title, author, isbn, genre } = rootSlice.actions