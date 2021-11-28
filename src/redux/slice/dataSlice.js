import { createSlice } from "@reduxjs/toolkit";

const stock = JSON.parse(localStorage.getItem('stock'))
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: stock?.length > 0 ? stock : []
  },
  reducers: {
    addData: (state, action) => {
      let temp = []
      let filterTemp = state.data.filter((item) => item.id == action.payload.id)
      if (filterTemp.length > 0) {
        if (state.data.length > 0) {
          state.data.map((item) => {
            if (item.id == action.payload.id) {
              temp.push({
                id: item.id,
                countCart: parseInt(action.payload.countCart) + parseInt(item.countCart),
                totalStock: parseInt(action.payload.totalStock),
                totalSales: parseInt(action.payload.totalSales) + parseInt(item.totalSales),
              })
            } else {
              temp.push(item)
            }
          })
        }
      } else {
        temp = temp.concat(state.data)
        temp.push(action.payload)
      }
      localStorage.setItem('stock', JSON.stringify(temp))
      return { data: temp }
    },
    removeData: (state, action) => {
      return null
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
