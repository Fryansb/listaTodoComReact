import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'all' | 'priority' | 'status'
  valor?: enums.Priority | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'all'
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { setTermo } = FiltroSlice.actions

export default FiltroSlice.reducer
