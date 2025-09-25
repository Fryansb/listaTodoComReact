import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonSave, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Option } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const cadastraTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      title,
      priority,
      enums.Status.PENDING,
      description,
      9
    )
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo> Nova tarefa </Titulo>
      <Form onSubmit={cadastraTarefa}>
        <Campo
          value={title}
          onChange={(evento) => setTitle(evento.target.value)}
          type="text"
          placeholder="Título da tarefa"
        />
        <Campo
          value={description}
          onChange={(evento) => setDescription(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPriority(evento.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Opcoes>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  )
}

export default Formulario
