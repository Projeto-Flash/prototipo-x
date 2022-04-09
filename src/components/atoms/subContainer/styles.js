import styled from 'styled-components'
import { theme } from 'styles/theme'

export const SubContainer = styled.div`
  width: 262px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 10px;

  border-radius: 2.5px;

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));

  background-color: ${props => props.color};
`
