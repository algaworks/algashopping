import styled from 'styled-components'
import bg from '../../assets/bg.svg'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-color: #F8F5EC;
  background-image: url(${bg});
  background-position: center center;
`

export const Container = styled.div`
  width: 734px;
  height: 574px;
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 0 3px 10px rgba(0,0,0,.15);
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
`