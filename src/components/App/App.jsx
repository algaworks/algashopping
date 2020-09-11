import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import { Wrapper, Container } from './App.styles'

function App () {
  const [lettuce, setLettuce] = useState(true)
  const [rice, setRice] = useState(false)

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={<div>
          produtos disponiveis:

          <Checkbox
            value={lettuce}
            title="Alface"
            onClick={() => setLettuce(!lettuce)}
          />
          <Checkbox
            value={rice}
            title="Arroz"
            onClick={() => setRice(!rice)}
          />
        </div>}
        middle={<div>
          sua lista de compras
        </div>}
        right={<div>
          estatisticas
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App