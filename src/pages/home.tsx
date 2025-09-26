import BarraLateral from '../containers/BarraLateral'
import ListaDeTarefas from '../containers/ListaDeTarefas'
import BotaoAdicionar from '../components/botaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
