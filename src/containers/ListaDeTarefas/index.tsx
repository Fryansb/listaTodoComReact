import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../store'
import TarefaModel from '../../models/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas) as {
    itens: TarefaModel[]
  }
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = (): TarefaModel[] => {
    let tarefasFiltradas: TarefaModel[] = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item: TarefaModel) =>
          item.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item: TarefaModel) => item.priority === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item: TarefaModel) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s)como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${criterio}=${valor} ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t: TarefaModel) => (
          <li key={t.title}>
            <Tarefa
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
