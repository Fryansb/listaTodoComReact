import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      description: ''
    },
    {
      id: 2,
      title: 'Estudar React',
      priority: enums.Priority.NORMAL,
      status: enums.Status.COMPLETED,
      description: ''
    },
    {
      id: 3,
      title: 'Estudar TypeScript',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      description: ''
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (TarefaJaExiste) {
        alert(`A tarefa "${action.payload.title}" já existe!`)
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.COMPLETED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } =
  tarefasSlice.actions

export default tarefasSlice.reducer
