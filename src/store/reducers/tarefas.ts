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
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
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
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
