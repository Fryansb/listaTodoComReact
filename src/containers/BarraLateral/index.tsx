import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar tarefa..." />
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

export default BarraLateral
