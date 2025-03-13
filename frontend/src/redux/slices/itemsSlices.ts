import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ArrOfObj, ItemsGeneralState} from '../../types/interfaces'
import {deleteItemFromServer} from '../thunks/deleteItemFromDB'
import {fetchData} from '../thunks/fetchData'

export const initialState: ItemsGeneralState = {
  data: [],
  countChanged: 0,
  isBuy: false,
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updeteItemList: (state, action: PayloadAction<ArrOfObj[]>) => {
      state.data = action.payload
    },
    additionItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.map((item) =>
        item.itemId === action.payload ? {...item, isChanged: !item.isChanged} : item
      )
    },
    isBuyItem: (state, action: PayloadAction<boolean>) => {
      state.isBuy = action.payload
    },
    cancelAllAdditionItem: (state) => {
      state.data = state.data.map((item) => (item.isChanged ? {...item, isChanged: false} : item))
    },
    countChangedItem: (state) => {
      state.countChanged = state.data.filter((item) => item.isChanged).length
    },
    resetCountChangedItem: (state) => {
      state.countChanged = 0
    },
    cancelSelection: (state, action: PayloadAction<string>) => {
      state.data = state.data.map((item) =>
        item.itemId === action.payload ? {...item, isChanged: !item.isChanged} : item
      )
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter((item) => item.itemId !== action.payload)
    },
    deleteIAlltem: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(deleteItemFromServer.fulfilled, (state, action: PayloadAction<string>) => {
        state.data = state.data.filter((item) => item.itemId !== action.payload)
      })
  },
})

export const {
  deleteItem,
  additionItem,
  deleteIAlltem,
  cancelSelection,
  countChangedItem,
  cancelAllAdditionItem,
  isBuyItem,
  resetCountChangedItem,
} = itemsSlice.actions

export default itemsSlice.reducer
