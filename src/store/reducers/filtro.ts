import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (
      state,
      action: PayloadAction<{
        criterio: 'prioridade' | 'status' | 'todas'
        valor?: enums.Priority | enums.Status
      }>
    ) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { setTermo, alterarFiltro } = FiltroSlice.actions

export default FiltroSlice.reducer
