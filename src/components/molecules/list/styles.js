import styled from 'styled-components'

export const Container = styled.div`
  .Content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1,
  h2 {
    font-size: 12px;
    letter-spacing: -0.25px;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    font-weight: 100;
  }

  .Box1,
  .Box2 {
    padding: 0px 5px;
  }

  .Box1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Children {
    display: flex;
    padding: 10px 0px;
  }

  .Box2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .BoxAddCard {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 5px;
  }
`
