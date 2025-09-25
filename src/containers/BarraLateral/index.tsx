import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(setTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDING}
            criterio="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enums.Status.COMPLETED}
            criterio="status"
            legenda="concluídas"
          />
          <FiltroCard
            valor={enums.Priority.IMPORTANT}
            criterio="prioridade"
            legenda="urgentes"
          />
          <FiltroCard
            valor={enums.Priority.URGENT}
            criterio="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enums.Priority.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
