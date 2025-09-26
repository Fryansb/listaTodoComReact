import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media ${device.telaPequena} {
    height: auto;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
