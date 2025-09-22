import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { setTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Buscar tarefa..."
        value={termo}
        onChange={(evento) => dispatch(setTermo(evento.target.value))}
      />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normais" contador={5} />
        <FiltroCard legenda="todas" contador={6} ativo />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
