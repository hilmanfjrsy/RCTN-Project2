import { createSlice } from "@reduxjs/toolkit";

const stock = JSON.parse(localStorage.getItem('stock'))
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: stock?.length > 0 ? stock : []
  },
  reducers: {
    addFirstLoad:(state,action) =>{
      localStorage.setItem('stock', JSON.stringify(action.payload))
      return {data : action.payload}
    },
    addData: (state, action) => {
      let temp = []
      let filterTemp = state.data.filter((item) => item.id == action.payload.id)
      if (filterTemp.length > 0) {
        if (state.data.length > 0) {
          state.data.map((item) => {
            if (item.id == action.payload.id) {
              temp.push({
                ...item,
                countCart: parseInt(action.payload.countCart),
                totalStock: parseInt(action.payload.totalStock),
                totalSales: parseInt(action.payload.totalSales) + parseInt(item.totalSales),
                totalPriceCart: (parseInt(action.payload.countCart) * item.price).toFixed(2)
              })
            } else {
              temp.push({...item})
            }
          })
        }
      } 
      localStorage.setItem('stock', JSON.stringify(temp))
      return { data: temp }
    },
    checkoutData: (state, action) => {
      let temp = []
      let filterTemp = state.data.filter((item) => item.id == action.payload.id)
      if (filterTemp.length > 0) {
        if (state.data.length > 0) {
          state.data.map((item) => {
            if (item.id == action.payload.id) {
              temp.push({
                ...item,
                countCart: 0,
                totalPriceCart: 0,
                totalStock: parseInt(item.totalStock) - parseInt(action.payload.countCart),
                totalSales: parseInt(item.totalSales) + parseInt(action.payload.countCart),
                totalPriceSales: (parseInt(item.totalSales) + parseInt(action.payload.countCart) * item.price).toFixed(2)
              })
            } else {
              temp.push({...item})
            }
          })
        }
      }
      localStorage.setItem('stock', JSON.stringify(temp))
      return { data: temp }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, checkoutData, addFirstLoad } = dataSlice.actions;

export default dataSlice.reducer;
