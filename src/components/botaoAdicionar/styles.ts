import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  &:hover {
    background-color: #ffffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 2s;
    color: #44bd32;
  }
`
