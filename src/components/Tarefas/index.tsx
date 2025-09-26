import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ButtonSave, Button } from '../../styles'
import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import {
  remover,
  editar,
  alterarStatus as alterarStatusAction
} from '../../store/reducers/tarefas'

type Props = TarefaClass

const Tarefa = ({
  title,
  priority,
  description: descriptionOriginal,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function cancelDescriptionEdit() {
    setEstaEditando(false)
    setDescription(descriptionOriginal)
  }

  function alterarStatus(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterarStatusAction({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.COMPLETED}
          onChange={alterarStatus}
        />
        <S.Title>
          {estaEditando && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!estaEditando}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editar({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelRemove
              onClick={() => {
                cancelDescriptionEdit()
              }}
            >
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
