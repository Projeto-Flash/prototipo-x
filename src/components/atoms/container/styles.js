import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Container = styled.div`
  width: 272px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 10px 5px;

  border-radius: 5px;

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));

  background-color: ${props => props.color};
`
