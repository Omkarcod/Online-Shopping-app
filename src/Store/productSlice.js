import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const API='https://fakestoreapi.com/products'
export const STATUSS = Object.freeze({
  IDLE: "idel",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    status: STATUSS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state, action) => {
//         state.status = STATUSS.LOADING;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.data = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = STATUSS.ERROR;
//       });
//   },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunk middleware
// export const fetchProducts = createAsyncThunk("product", async () => {
//   const result = await fetch("https://fakestoreapi.com/products");
//   const data = await result.json();
//   return data;
// });

export  function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSS.LOADING))
        try{
            const result= await fetch('https://fakestoreapi.com/products');
            const data= await result.json();
            // console.log(data);
           dispatch(setProducts(data))
           dispatch(setStatus(STATUSS.IDLE))

        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUSS.ERROR));

        }

    }
}
